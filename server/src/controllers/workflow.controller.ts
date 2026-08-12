import { Request, Response } from "express";
import {
  getAllWorkflows,
  getWorkflowById,
  getWorkflowGraph,
} from "../services/workflow.service.js";



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
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch workflows",
    });
  }
}

export async function getWorkflow(
  req: Request,
  res: Response
) {
  try {
    const workflow = await getWorkflowById(req.params.id as string);

    if (!workflow) {
      return res.status(404).json({
        success: false,
        message: "Workflow not found",
      });
    }

    res.status(200).json({
      success: true,
      data: workflow,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch workflow",
    });
  }
}

export async function getWorkflowGraphController(
  req: Request,
  res: Response
) {
  try {
    const graph = await getWorkflowGraph(req.params.id as string);

    res.json({
      success: true,
      data: graph,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch workflow graph",
    });
  }
}