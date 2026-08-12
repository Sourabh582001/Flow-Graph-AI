import express from "express";
import cors from "cors";
import workflowRouter from "./routes/workflow.routes.js";
import impactRouter from "./routes/impact.routes.js";
import dashboardRouter from "./routes/dashboard.routes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (_, res) => {
  res.json({
    success: true,
    message: "FlowGraph AI Backend Running 🚀",
  });
});

app.use("/api/impact", impactRouter);

app.use("/api/workflows", workflowRouter);

app.use("/api/dashboard", dashboardRouter);


export default app;