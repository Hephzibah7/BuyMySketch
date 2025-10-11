import { NextFunction } from "express";
import userDataType from "../type/userDataType.js";
import { AppError} from "../utils/AppError.js";
import { validate} from "email-validator";

async function addUser(user:userDataType, next:NextFunction){
    try{
        const {name, password, email, role}=user;

        //check whether the fields are not empty
        if(!name) return next(new AppError("Name is required",400));
        if(!password) return next(new AppError("UserName is required",400));
        if(!email) return next(new AppError("Email Address is required",400));
        if(!role) return next(new AppError("Role is required",400));

        //validate the email
        const isValid=validate(email);
        if(!isValid) return next(new AppError("Email is not valid", 400));

        return user;

    }catch(error){
        next(error);
    }
}

const userHelper={
    addUser:addUser
}

export default userHelper;