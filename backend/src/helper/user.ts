import { NextFunction } from "express";
import userDataType from "../type/userDataType.js";
import { AppError} from "../utils/AppError.js";
import { validate} from "email-validator";
import loginType from "../type/loginType.js";
import { ValidationError, BadRequestError, APIError } from "../utils/AppError.js";
async function addUser(user:userDataType, next:NextFunction){
    try{
        
        const {name, password, email, role}=user;

        //check whether the fields are not empty
        if(!name) throw new ValidationError("Name is required");
        if(!password) throw (new ValidationError("UserName is required"));
        if(!email) throw (new ValidationError("Email Address is required"));

        //validate the email
        const isValid=validate(email);
        if(!isValid) throw (new BadRequestError("Email is not valid"));
        
        return user;

    }catch(error){
        return next(error);
    }
}
async function loginUser(user:loginType, next:NextFunction){
    try{
        const {email, password}=user;
        if(!email) throw new ValidationError("Email is Required");
        if(!password) throw new ValidationError("Password is missing");
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