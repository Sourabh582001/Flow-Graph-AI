import api from "./api";

export async function getWorkflowGraph(id: string) {
  const response = await api.get(`/workflows/${id}/graph`);
  return response.data.data;
}

export async function getWorkflows() {
  const response = await api.get("/workflows");
  return response.data.data;
}

export async function getWorkflow(id: string) {
  const response = await api.get(`/workflows/${id}`);
  return response.data.data;
}