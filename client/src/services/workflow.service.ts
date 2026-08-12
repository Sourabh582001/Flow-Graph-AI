import api from "./api";

export async function getWorkflowGraph(id: string) {
  const response = await api.get(`/workflows/${id}/graph`);
  return response.data.data;
}