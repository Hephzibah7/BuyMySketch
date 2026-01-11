import { NextFunction } from "express";
import paintingType from "../type/paintingType.js";
import { ValidationError } from "../utils/AppError.js";

async function addPainting(data:paintingType, userId:string, next:NextFunction){
    try{
        const {name, category, description, image, likes}=data;
        if(!name) throw new ValidationError("Name is required");
        if(!category) throw new ValidationError("Category is required");
        if(!image) throw new ValidationError("Please Upload the Image again");
        
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