import {Request, Response, NextFunction} from "express";
import sellerRepo from "../repositary/seller.js";
import User from "../model/user.js";
import userRepo from "../repositary/user.js";

async function addSeller(req:Request, res:Response, next:NextFunction):Promise<void>{
    try{
        const data=req.body;
       const userId=req.user as string;
        const newSeller=await sellerRepo.addSeller(data, userId, next);
        res.status(201).json({
            success:true,
            message: "Seller Details added Successfully"
        }) 

    }
    catch(error){
        next(error);
    }
}
async function getSeller(req:Request, res:Response, next:NextFunction):Promise<void>{
    try{
        const userId=req.user as string;
        const data=await sellerRepo.getSeller(userId, next);
        res.status(200).json({data:data}); 

    }
    catch(error){
        next(error);
    }
}

async function getAllSeller(req:Request, res:Response, next:NextFunction):Promise<void>{
    try{
        const data=await sellerRepo.getAllSeller(next);
        res.status(200).json({data:data});
    }
    catch(error){
        next(error);
    }
}

async function updateSeller(req:Request, res:Response, next:NextFunction):Promise<void>{
    try{
        const userId=req.user as string;
        const data=req.body as any;
        const newdata=await sellerRepo.updateSeller(userId, data, next);
        res.status(201).json({
            success:true,
            message:"User Details Updated Successfully"
        })
    }
    catch(error){
        next(error);
    }
}



const sellerController={
    addSeller:addSeller,
    getSeller:getSeller,
    getAllSeller:getAllSeller,
    updateSeller:updateSeller,
   
}

export default sellerController;