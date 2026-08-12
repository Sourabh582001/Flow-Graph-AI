import driver from "../config/db.js";

export async function getDashboardStats() {
  const session = driver.session();

  try {
    const result = await session.run(`
      MATCH (w:Workflow)
      WITH count(w) AS workflows

      MATCH (a:Agent)
      WITH workflows, count(a) AS agents

      MATCH (s:Service)
      WITH workflows, agents, count(s) AS services

      MATCH ()-[r]->()
      RETURN
        workflows,
        agents,
        services,
        count(r) AS relationships
    `);

    const record = result.records[0];

    return {
      workflows: Number(record.get("workflows")),
      agents: Number(record.get("agents")),
      services: Number(record.get("services")),
      relationships: Number(record.get("relationships")),
    };
  } finally {
    await session.close();
  }
}