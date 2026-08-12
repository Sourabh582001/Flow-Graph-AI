import { Router } from "express";
import { getWorkflows } from "../controllers/workflow.controller.js";

const router = Router();

router.get("/", getWorkflows);

export default router;