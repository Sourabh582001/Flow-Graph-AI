
# FlowGraph AI

## Live Demo

Frontend:
https://flow-graph-ai.vercel.app

Backend:
https://flowgraph-ai-server.onrender.com

A modern full-stack workflow visualization platform built with **React**, **Node.js**, **TypeScript**, and **Neo4j (CognoDB)**.

The application visualizes AI workflows as interactive dependency graphs, allowing users to explore workflows, agents, connected services, and their relationships using a Graph Database.

---

# 📸 Preview

> Add screenshots here after deployment.

- Dashboard
- Workflow List
- Workflow Dependency Graph
- Impact Analysis API

---

# Features

## Frontend

- Modern React + TypeScript application
- Responsive dashboard
- Workflow listing
- Workflow details page
- Interactive dependency graph using React Flow
- Live API integration
- Clean UI built with Tailwind CSS

---

## Backend

- Express.js REST API
- Neo4j (CognoDB) integration
- Graph traversal using Cypher
- Seed script for sample graph generation
- Dashboard statistics API
- Workflow graph API
- Workflow dependency API
- Impact analysis API

---

# Tech Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Flow
- Axios
- React Router

## Backend

- Node.js
- Express
- TypeScript

## Database

- Neo4j (CognoDB Aura)

---

# Project Structure

```
flowgraph-ai/

│

├── client/

│   ├── src/

│   │   ├── components/

│   │   ├── pages/

│   │   ├── services/

│   │   ├── graph/

│   │   └── ...

│

├── server/

│   ├── src/

│   │   ├── config/

│   │   ├── controllers/

│   │   ├── routes/

│   │   ├── services/

│   │   ├── graph/

│   │   ├── types/

│   │   └── ...

│

├── README.md

└── .gitignore
```

---

# Why Graph Database?

Traditional relational databases require multiple joins to represent workflow dependencies.

Neo4j stores relationships as first-class citizens, making graph traversal significantly simpler and more efficient.

Example graph:

```
Workflow
   │
   ▼
Agent
   │
   ▼
Agent
   │
   ▼
OpenAI
   │
   ├────────► Slack
   │
   └────────► Salesforce
```

Graph traversal enables efficient dependency analysis and workflow visualization.

---

# Data Model

### Nodes

- Workflow
- Agent
- Service

### Relationships

- `USES`
- `CALLS`

Example:

```
Workflow
    ──USES──► Agent

Agent
    ──CALLS──► Agent

Agent
    ──USES──► Service

Service
    ──USES──► Service
```

---

#🔌 API Endpoints

## Dashboard

```
GET /api/dashboard/stats
```

Returns:

- Total Workflows
- Total Agents
- Total Services
- Total Relationships

---

## Workflows

```
GET /api/workflows
```

Returns all workflows.

---

```
GET /api/workflows/:id
```

Returns workflow details.

---

```
GET /api/workflows/:id/graph
```

Returns React Flow compatible graph nodes and edges.

---

## Impact Analysis

```
GET /api/impact/:service
```

Returns workflow impact information for a failed service.

---

# Database Seeding

Run:

```bash
cd server

npm run seed
```

This creates sample workflows, agents, services, and relationships inside Neo4j.

---

# Environment Variables

Server

```
PORT=5000

NEO4J_URI=neo4j+s://xxxxxxxx.databases.neo4j.io

NEO4J_USERNAME=neo4j

NEO4J_PASSWORD=your_password
```

Client

```
VITE_API_URL=http://localhost:5000/api
```

---

# Getting Started

## Clone

```bash
git clone <repository-url>
```

---

## Install Client

```bash
cd client

npm install
```

---

## Install Server

```bash
cd server

npm install
```

---

## Start Backend

```bash
npm run dev
```

---

## Seed Database

```bash
npm run seed
```

---

## Start Frontend

```bash
cd client

npm run dev
```

---

# Graph Traversal

Example Cypher query:

```cypher
MATCH p=(w:Workflow {id:$id})-[*]->(n)
RETURN p
```

This query traverses the complete dependency graph for a workflow and generates the graph visualization used in React Flow.

---

# Assignment Requirements Covered

- Graph Data Modeling
- Multi-hop Graph Traversal
- Graph Visualization
- REST APIs
- Neo4j Integration
- Seed Script
- Modern React Frontend
- TypeScript
- Express Backend
- Clean Folder Structure
- Environment Configuration

---

# 🔮 Future Improvements

- Authentication
- Real-time workflow monitoring
- Drag-and-drop workflow editor
- Workflow execution engine
- Role-based access control
- Advanced impact analysis
- Graph analytics dashboard

---

# Author

**Sourabh Kumar**

Frontend / Full Stack Developer

GitHub:
(Add GitHub Profile)

LinkedIn:
(Add LinkedIn Profile)

---

# License

This project was developed as part of the **Wexa AI Full Stack Assignment**.
