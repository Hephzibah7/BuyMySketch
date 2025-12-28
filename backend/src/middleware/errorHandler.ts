// src/middleware/errorHandler.ts
import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError.js";

/**
 * This middleware has four parameters, express identifies it as an error handler in our case it is this method.
 * so in any method if we encounter any error we return next(error), the error is passed in this middleware as appError type with 
 *
 * @param err  Application-specific error instance
 * @param req  Express request object
 * @param res  Express response object
 * @param next Express next middleware function
 */

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