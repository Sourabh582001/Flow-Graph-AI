import driver from "../config/db.js";
import { workflows } from "./seedData.js";

async function seedDatabase() {
  const session = driver.session();

  try {
    console.log("🌱 Seeding database...");

    // Clear existing graph
    await session.run(`
      MATCH (n)
      DETACH DELETE n
    `);

    // Loop through workflows
    for (const workflow of workflows) {
      // Create Workflow
      await session.run(
        `
        MERGE (w:Workflow {id: $id})
        SET w.name = $name,
            w.status = $status
        `,
        {
          id: workflow.id,
          name: workflow.name,
          status: workflow.status,
        }
      );

      // Create Agents
      for (const agent of workflow.agents) {
        await session.run(
          `
          MERGE (a:Agent {id: $id})
          SET a.name = $name
          `,
          {
            id: agent.id,
            name: agent.name,
          }
        );

        // Workflow -> Agent
        await session.run(
          `
          MATCH (w:Workflow {id:$workflowId})
          MATCH (a:Agent {id:$agentId})

          MERGE (w)-[:USES]->(a)
          `,
          {
            workflowId: workflow.id,
            agentId: agent.id,
          }
        );
      }

      // Create Services
      for (const service of workflow.services) {
        await session.run(
          `
          MERGE (s:Service {id:$id})
          SET s.name=$name
          `,
          {
            id: service.id,
            name: service.name,
          }
        );
      }

      // ---------------------------
      // Relationships
      // ---------------------------

      // Agent -> Agent
      if (workflow.agents.length > 1) {
        for (let i = 0; i < workflow.agents.length - 1; i++) {
          await session.run(
            `
            MATCH (a1:Agent {id:$source})
            MATCH (a2:Agent {id:$target})

            MERGE (a1)-[:CALLS]->(a2)
            `,
            {
              source: workflow.agents[i].id,
              target: workflow.agents[i + 1].id,
            }
          );
        }
      }

      // Last Agent -> First Service
      if (
        workflow.agents.length > 0 &&
        workflow.services.length > 0
      ) {
        await session.run(
          `
          MATCH (a:Agent {id:$agentId})
          MATCH (s:Service {id:$serviceId})

          MERGE (a)-[:USES]->(s)
          `,
          {
            agentId:
              workflow.agents[
                workflow.agents.length - 1
              ].id,

            serviceId: workflow.services[0].id,
          }
        );
      }

      // Service -> Service
      if (workflow.services.length > 1) {
        for (let i = 0; i < workflow.services.length - 1; i++) {
          await session.run(
            `
            MATCH (s1:Service {id:$source})
            MATCH (s2:Service {id:$target})

            MERGE (s1)-[:CONNECTS_TO]->(s2)
            `,
            {
              source: workflow.services[i].id,
              target: workflow.services[i + 1].id,
            }
          );
        }
      }
    }

    console.log("🎉 Database Seeded Successfully");
  } catch (error) {
    console.error("❌ Seed Failed");
    console.error(error);
  } finally {
    await session.close();
    await driver.close();
  }
}

seedDatabase();