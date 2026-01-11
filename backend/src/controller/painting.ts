import {Request, Response, NextFunction} from "express"
import { AppError } from "../utils/AppError.js"
import paintingHelper from "../helper/painting.js";
import paintingRepo from "../repositary/painting.js";
import { ValidationError, BadRequestError, APIError } from "../utils/AppError.js";
async function addPainting(req:Request, res:Response, next:NextFunction):Promise<void>{
    try{
        const data=req.body;
        const userId=req.user as string;
        if(!data) throw next(new ValidationError("Data Missing"));
        const painting=await paintingHelper.addPainting(data, userId, next);

        if(!painting) return;

        await paintingRepo.addPainting(painting, userId, next);

         res.status(201).json({
            success:true,
            message: "Painting Added Successfully"
        }) 

    }
    catch(error){
        return next(error);
    }
}

async function getPainting(req:Request, res:Response, next:NextFunction):Promise<void>{
    try{
        const userId=req.user as string;
        const data=await paintingRepo.getPainting(userId, next);
        res.status(200).json({data:data}); 
    }
    catch(error){
        return next(error);
    }
}

const paintingController={
    addPainting:addPainting,
    getPainting:getPainting
}

export default paintingController;