import { Router } from "express";
import { impactAnalysis } from "../controllers/impact.controller.js";

const router = Router();

router.get("/:service", impactAnalysis);

export default router;