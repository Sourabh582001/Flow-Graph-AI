export const workflowDetails = {
  id: 1,
  name: "Lead Qualification",
  status: "Running",
  owner: "Sales Team",
  createdAt: "10 Aug 2026",

  agents: [
    "Lead Agent",
    "Validation Agent",
    "Email Agent",
  ],

  services: [
    "OpenAI",
    "Slack",
    "Salesforce",
  ],

  impact: {
    severity: "Medium",
    affectedAgents: 3,
    affectedServices: 3,
  },
};