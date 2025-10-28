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
        const data=await Seller.findOne({userId:userId}).lean();
        console.log(data);
        return data;

    }
    catch(error){
        next(error);
    }
}
async function getAllSeller(next:NextFunction){
    try{
        const data=await Seller.find();
        console.log(data);
        return data;

    }
    catch(error){
        next(error);
    }
}
async function updateSeller(userId:string, data:any, next:NextFunction){
    try{
        const updatedSeller=await Seller.findOneAndUpdate(
            {userId},
            {$set:data},
            {new:true, runValidators:true}
        );


    }
    catch(error){
        next(error);
    }
}


const sellerRepo={
    addSeller:addSeller,
    getSeller:getSeller,
    getAllSeller:getAllSeller,
    updateSeller:updateSeller
}

export default sellerRepo;