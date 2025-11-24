import { NextFunction } from "express";
import { AppError } from "../utils/AppError.js";
import paintingType from "../type/paintingType.js";
import Painting from "../model/painting.js";

async function addPainting(data:paintingType, userId:string, next:NextFunction){
    try{
        const {name, description, category, image, likes}=data;
        const newPainting=new Painting({userId, name, description, category, image, likes});
        const savedPainting=await newPainting.save();
    }
    catch(error){
        return next(error);
    }
}

async function getPainting(userId:string, next:NextFunction){
    try{
        const data=await Painting.findOne({userId:userId});
        return data;
        
    }
    catch(error){
        return next(error);
    }
}

const paintingRepo={
    addPainting:addPainting,
    getPainting:getPainting
    
}

export default paintingRepo;