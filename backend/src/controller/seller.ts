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
        const data=sellerRepo.getSeller(userId, next);
        res.status(201).json({
            success:true,
            message: "Seller Details added Successfully"
        }) 

    }
    catch(error){
        next(error);
    }
}

const sellerController={
    addSeller:addSeller,
    getSeller:getSeller
}

export default sellerController;