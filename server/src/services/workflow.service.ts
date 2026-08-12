import driver from "../config/db.js";

export async function getAllWorkflows() {
  const session = driver.session();

  try {
    const result = await session.run(`
      MATCH (w:Workflow)
      RETURN w
    `);

    return result.records.map((record) => {
      const workflow = record.get("w").properties;

      return {
        id: workflow.id,
        name: workflow.name,
        status: workflow.status,
      };
    });
  } finally {
    await session.close();
  }
}