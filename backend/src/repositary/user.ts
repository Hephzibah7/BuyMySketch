import { NextFunction } from "express";
import userDataType from "../type/userDataType.js";
import User from "../model/user.js";
import bcrypt from "bcrypt";
import { AppError} from "../utils/AppError.js";
import loginType from "../type/loginType.js";
import jwt from "jsonwebtoken"

const SECRET_KEY="secret_key";

async function addUser(user:userDataType, next:NextFunction){
    try{
        const {name, password, email, role}=user;
        const existingUser=await User.findOne({email});
        
        //check if the user exists
        if(existingUser) throw new AppError("User Already Exists",409);

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser=new User({name, email, password:hashedPassword, role});
        const savedUser = await newUser.save();


        
    } catch(error){
        return next(error);
    }
}
async function loginUser(user:loginType, next:NextFunction){
    try{
        const {email, password}=user;
        const existingUser=await User.findOne({email});
        if(!existingUser) throw new AppError("User not Found",404);

        const isPasswordValid=await bcrypt.compare(password, existingUser.password);
        if(!isPasswordValid) throw new AppError("Invalid Credentials", 401);
        
        const token=jwt.sign({userId:existingUser._id}, SECRET_KEY,{
            expiresIn:"1h",
        });
        console.log(token);

        const userCredentials={
            name:existingUser.name,
            email:existingUser.email,
            token:token,
        }

        return userCredentials;

    }   
    catch(error){
        next(error);
    }
}

const userRepo={
    addUser:addUser,
    loginUser:loginUser
}

export default userRepo;