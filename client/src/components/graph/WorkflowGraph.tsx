import { useEffect, useCallback } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
  type Connection,
} from "@xyflow/react";

import { getWorkflowGraph } from "@/services/workflow.service";

const WorkflowGraph = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    async function loadGraph() {
      try {
        const graph = await getWorkflowGraph("wf-1");

        setNodes(graph.nodes);
        setEdges(graph.edges);
      } catch (error) {
        console.error(error);
      }
    }

    loadGraph();
  }, [setNodes, setEdges]);

  const onConnect = useCallback(
    (params: Connection) =>
      setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="h-[500px] rounded-2xl border border-slate-800 bg-slate-900 p-4">
      <h2 className="mb-4 text-xl font-semibold text-white">
        Workflow Dependency Graph
      </h2>

      <div className="h-[420px] overflow-hidden rounded-xl">
        <ReactFlow
          colorMode="dark"
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <Background gap={18} size={1} />
          <MiniMap
            zoomable
            pannable
            style={{
              background: "#111827",
            }}
          />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};

export default WorkflowGraph;