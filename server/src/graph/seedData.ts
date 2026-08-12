import { Workflow, Agent, Service } from "../types/workflow.types.js";

export const workflow: Workflow = {
  id: "wf-1",
  name: "Lead Qualification",
  status: "Running",
};

export const agents: Agent[] = [
  {
    id: "agent-1",
    name: "Lead Agent",
  },
  {
    id: "agent-2",
    name: "Validation Agent",
  },
];

export const services: Service[] = [
  {
    id: "service-1",
    name: "OpenAI",
  },
  {
    id: "service-2",
    name: "Slack",
  },
  {
    id: "service-3",
    name: "Salesforce",
  },
];