export interface Service {
  id: string;
  name: string;
}

export interface Agent {
  id: string;
  name: string;
}

export interface Workflow {
  id: string;
  name: string;
  status: "Running" | "Paused" | "Failed";
  agents: Agent[];
  services: Service[];
}