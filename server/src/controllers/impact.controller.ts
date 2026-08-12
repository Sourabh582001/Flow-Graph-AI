import { Request, Response } from "express";
import { getImpactAnalysis } from "../services/impact.service.js";

export async function impactAnalysis(
  req: Request,
  res: Response
) {
  try {
    const data = await getImpactAnalysis(
      req.params.service as string
    );

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Impact analysis failed",
    });
  }
}