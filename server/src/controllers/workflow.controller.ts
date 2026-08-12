import { Request, Response } from "express";
import { getAllWorkflows } from "../services/workflow.service.js";

export async function getWorkflows(
  req: Request,
  res: Response
) {
  try {
    const workflows = await getAllWorkflows();

    res.status(200).json({
      success: true,
      data: workflows,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch workflows",
    });
  }
}