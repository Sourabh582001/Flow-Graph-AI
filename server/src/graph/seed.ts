import driver from "../config/db.js";
import { workflow, agents, services } from "./seedData.js";

async function seedDatabase() {
  const session = driver.session();

  try {
    console.log("🌱 Seeding database...");

    // Clear existing graph
    await session.run(`
      MATCH (n)
      DETACH DELETE n
    `);

    // Create Workflow
    await session.run(
      `
      CREATE (w:Workflow {
        id: $id,
        name: $name,
        status: $status
      })
    `,
      workflow
    );

    // Create Agents
    for (const agent of agents) {
      await session.run(
        `
        CREATE (a:Agent {
          id: $id,
          name: $name
        })
      `,
        agent
      );
    }

    // Create Services
    for (const service of services) {
      await session.run(
        `
        CREATE (s:Service {
          id: $id,
          name: $name
        })
      `,
        service
      );
    }

    console.log("✅ Nodes Created");

    // Relationships
    await session.run(`
      MATCH (w:Workflow {id:'wf-1'})
      MATCH (a1:Agent {id:'agent-1'})
      MATCH (a2:Agent {id:'agent-2'})
      MATCH (s1:Service {id:'service-1'})
      MATCH (s2:Service {id:'service-2'})
      MATCH (s3:Service {id:'service-3'})

      CREATE (w)-[:USES]->(a1)
      CREATE (a1)-[:CALLS]->(a2)
      CREATE (a2)-[:USES]->(s1)
      CREATE (s1)-[:CONNECTS_TO]->(s2)
      CREATE (s1)-[:CONNECTS_TO]->(s3)
    `);

    console.log("✅ Relationships Created");
    console.log("🎉 Database Seeded Successfully");

  } catch (error) {
    console.error(error);
  } finally {
    await session.close();
    await driver.close();
  }
}

seedDatabase();