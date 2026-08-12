import { Router } from "express";

import {
  getWorkflows,
  getWorkflow,
  getWorkflowGraphController,
} from "../controllers/workflow.controller.js";

const router = Router();

router.get("/", getWorkflows);

router.get("/:id", getWorkflow);

router.get("/:id/graph", getWorkflowGraphController);


export default router;