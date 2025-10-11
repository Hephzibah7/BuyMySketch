// src/middleware/errorHandler.ts
import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError.js";

export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("❌ Error:", err.message);

  const status = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(status).json({ success: false, message });
};