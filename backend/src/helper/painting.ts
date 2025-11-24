import { NextFunction } from "express";
import paintingType from "../type/paintingType.js";
import { AppError } from "../utils/AppError.js";

async function addPainting(data:paintingType, userId:string, next:NextFunction){
    try{
        const {name, category, description, image}=data;
        if(!name) throw new AppError("Name is required",400);
        if(!category) throw new AppError("Category is required",400);
        if(!image) throw new AppError("Please Upload the Image again",400);

        return data;
    }
    catch(error){
        return next(error);
    }
}

const paintingHelper={
    addPainting:addPainting
}

export default paintingHelper;