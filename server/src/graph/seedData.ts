import { Workflow, Agent, Service } from "../types/workflow.types.js";

export const workflows = [
  {
    id: "wf-1",
    name: "Lead Qualification",
    status: "Running",
    agents: [
      {
        id: "agent-1",
        name: "Lead Agent",
      },
      {
        id: "agent-2",
        name: "Validation Agent",
      },
    ],
    services: [
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
    ],
  },

  {
    id: "wf-2",
    name: "Customer Support",
    status: "Running",
    agents: [
      {
        id: "agent-3",
        name: "Support Agent",
      },
      {
        id: "agent-4",
        name: "Knowledge Agent",
      },
    ],
    services: [
      {
        id: "service-4",
        name: "Claude",
      },
      {
        id: "service-2",
        name: "Slack",
      },
    ],
  },

  {
    id: "wf-3",
    name: "Invoice Processing",
    status: "Paused",
    agents: [
      {
        id: "agent-5",
        name: "OCR Agent",
      },
      {
        id: "agent-6",
        name: "Finance Agent",
      },
    ],
    services: [
      {
        id: "service-5",
        name: "Gemini",
      },
      {
        id: "service-6",
        name: "SAP",
      },
      {
        id: "service-7",
        name: "Gmail",
      },
    ],
  },
];