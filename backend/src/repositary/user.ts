import { NextFunction } from "express";
import userDataType from "../type/userDataType.js";
import User from "../model/user.js";
import bcrypt from "bcrypt";
import { AppError} from "../utils/AppError.js";


async function addUser(user:userDataType, next:NextFunction){
    try{
        const {name, password, email, role}=user;
        const existingUser=await User.findOne({email});
        
        //check if the user exists
        if(existingUser) return next(new AppError("User Already Exists",409));

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser=new User({name, email, password:hashedPassword});
        const savedUser = await newUser.save();


        
    } catch(error){
        next(error);
    }
}

const userreposit={
    addUser:addUser
}

export default userreposit;