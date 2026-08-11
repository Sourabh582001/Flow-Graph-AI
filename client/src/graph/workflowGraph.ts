import { MarkerType } from "@xyflow/react";

export const initialNodes = [
  {
    id: "workflow",
    position: { x: 100, y: 40 },
    data: { label: "Lead Qualification" },
    type: "input",
  },

  {
    id: "agent1",
    position: { x: 100, y: 180 },
    data: { label: "Lead Agent" },
  },

  {
    id: "agent2",
    position: { x: 100, y: 320 },
    data: { label: "Validation Agent" },
  },

  {
    id: "openai",
    position: { x: 100, y: 470 },
    data: { label: "OpenAI" },
  },

  {
    id: "slack",
    position: { x: -20, y: 620 },
    data: { label: "Slack" },
  },

  {
    id: "salesforce",
    position: { x: 220, y: 620 },
    data: { label: "Salesforce" },
  },
];

export const initialEdges = [
  {
    id: "e1",
    source: "workflow",
    target: "agent1",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },

  {
    id: "e2",
    source: "agent1",
    target: "agent2",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },

  {
    id: "e3",
    source: "agent2",
    target: "openai",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },

  {
    id: "e4",
    source: "openai",
    target: "slack",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },

  {
    id: "e5",
    source: "openai",
    target: "salesforce",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];