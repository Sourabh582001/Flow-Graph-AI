import driver from "../config/db.js";

export async function getImpactAnalysis(serviceName: string) {
  const session = driver.session();

  try {
    const result = await session.run(
      `
      MATCH (s:Service {name:$service})
      MATCH p=(w:Workflow)-[*]->(s)
      RETURN DISTINCT w.name AS workflow,
             s.name AS service
      `,
      {
        service: serviceName,
      }
    );

    return result.records.map((record) => ({
      workflow: record.get("workflow"),
      service: record.get("service"),
    }));
  } finally {
    await session.close();
  }
}