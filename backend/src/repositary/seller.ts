import { NextFunction } from "express";
import sellerDataType from "../type/sellerDataType.js";
import { AppError } from "../utils/AppError.js";
import Seller from "../model/seller.js";
import sellerType from "../type/sellerType.js";

async function addSeller(seller:sellerDataType, userId:string, next:NextFunction){
    try{
        const total={
            userId:userId,
            seller,
        }
        console.log(total);
        const newSeller=new Seller(total);
        const data=await newSeller.save();

    }
    catch(error){
        next(error);
    }
}
async function getSeller(userId:string, next:NextFunction){
    try{
        const data=await Seller.findOne({userId:userId});
        return data;

    }
    catch(error){
        next(error);
    }
}


const sellerRepo={
    addSeller:addSeller,
    getSeller:getSeller
}

export default sellerRepo;