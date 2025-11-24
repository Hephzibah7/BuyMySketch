import { NextFunction } from "express";
import userDataType from "../type/userDataType.js";
import { AppError} from "../utils/AppError.js";
import { validate} from "email-validator";
import loginType from "../type/loginType.js";

async function addUser(user:userDataType, next:NextFunction){
    try{
        
        const {name, password, email, role}=user;

        //check whether the fields are not empty
        if(!name) throw new AppError("Name is required",400);
        if(!password) throw (new AppError("UserName is required",400));
        if(!email) throw (new AppError("Email Address is required",400));

        //validate the email
        const isValid=validate(email);
        if(!isValid) throw (new AppError("Email is not valid", 400));
        
        return user;

    }catch(error){
        return next(error);
    }
}
async function loginUser(user:loginType, next:NextFunction){
    try{
        const {email, password}=user;
        if(!email) throw new AppError("Email is Required",400);
        if(!password) throw new AppError("Password is missing",400);
        return user;
    }
    catch(error){
        return next(error);
    }
}

const userHelper={
    addUser:addUser,
    loginUser:loginUser
}

export default userHelper;