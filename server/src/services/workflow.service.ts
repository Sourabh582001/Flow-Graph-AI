import driver from "../config/db.js";

export async function getAllWorkflows() {
  const session = driver.session();

  try {
    const result = await session.run(`
      MATCH (w:Workflow)

      OPTIONAL MATCH (w)-[:USES]->(a:Agent)

      OPTIONAL MATCH (a)-[:USES]->(s:Service)

      RETURN
        w,
        COUNT(DISTINCT a) AS agents,
        COUNT(DISTINCT s) AS services
    `);

    return result.records.map((record) => {
      const workflow = record.get("w").properties;

      return {
        id: workflow.id,
        name: workflow.name,
        status: workflow.status,
        agents: Number(record.get("agents")),
        services: Number(record.get("services")),
      };
    });
  } finally {
    await session.close();
  }
}

export async function getWorkflowById(id: string) {
  const session = driver.session();

  try {
    const result = await session.run(
      `
      MATCH (w:Workflow {id:$id})

      OPTIONAL MATCH (w)-[:USES]->(a:Agent)
      OPTIONAL MATCH (a)-[:CALLS*0..5]->(a2:Agent)
      OPTIONAL MATCH (a)-[:USES|CALLS*0..5]->(:Agent)-[:USES]->(s:Service)

      RETURN
        w,
        COUNT(DISTINCT a) + COUNT(DISTINCT a2) AS agents,
        COUNT(DISTINCT s) AS services
      `,
      { id }
    );

    if (result.records.length === 0) {
      return null;
    }

    const record = result.records[0];
    const workflow = record.get("w").properties;

    return {
      id: workflow.id,
      name: workflow.name,
      status: workflow.status,
      agents: Number(record.get("agents")),
      services: Number(record.get("services")),
    };
  } finally {
    await session.close();
  }
}

export async function getWorkflowGraph(id: string) {
  const session = driver.session();

  try {
    const result = await session.run(
      `
      MATCH p=(w:Workflow {id:$id})-[*]->(n)
      RETURN p
      `,
      { id }
    );

    const nodeMap = new Map<string, any>();
    const edgeMap = new Map<string, any>();

    result.records.forEach((record) => {
      const path = record.get("p");

      path.segments.forEach((segment: any) => {
        const start = segment.start;
        const end = segment.end;

        // -----------------------
        // Nodes
        // -----------------------

        if (!nodeMap.has(start.properties.id)) {
          nodeMap.set(start.properties.id, {
            id: start.properties.id,
            data: {
              label: start.properties.name,
            },
            position: { x: 0, y: 0 },
            type: start.labels[0] === "Workflow" ? "input" : "default",
          });
        }

        if (!nodeMap.has(end.properties.id)) {
          nodeMap.set(end.properties.id, {
            id: end.properties.id,
            data: {
              label: end.properties.name,
            },
            position: { x: 0, y: 0 },
            type: end.labels[0] === "Service" ? "output" : "default",
          });
        }

        // -----------------------
        // Unique Edges
        // -----------------------

        const edgeId = `${start.properties.id}-${end.properties.id}`;

        if (!edgeMap.has(edgeId)) {
          edgeMap.set(edgeId, {
            id: edgeId,
            source: start.properties.id,
            target: end.properties.id,
            animated: true,
          });
        }
      });
    });

    // -----------------------
    // Auto Layout
    // -----------------------

    const nodes = Array.from(nodeMap.values()).map((node, index) => ({
      ...node,
      position: {
        x: 250,
        y: index * 140,
      },
    }));

    return {
      nodes,
      edges: Array.from(edgeMap.values()),
    };
  } finally {
    await session.close();
  }
}