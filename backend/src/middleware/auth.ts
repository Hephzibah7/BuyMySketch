import jwt from "jsonwebtoken";
import { AppError } from "../utils/AppError.js";
import {Request, Response, NextFunction} from "express"
import payLoadType from "../type/payLoadType.js";
import requestType from "../type/requestType.js";

const verifyToken=(req:Request,res:Response,next:NextFunction)=>{
    try{
        const authHeader=req.headers.authorization;
         if (!authHeader || !authHeader.startsWith("Bearer ")) {
         throw new AppError("Token is missing",401);
    }
    const token = authHeader.split(" ")[1];
    const secretKey = "secret_key";
    
    // Verify the token
    const decoded = jwt.verify(token, secretKey) as payLoadType;
    req.user=decoded.userId;
    next();
    }
    catch(error){
        next(error);
    }
}

export default verifyToken;