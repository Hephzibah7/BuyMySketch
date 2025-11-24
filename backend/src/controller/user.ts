import {Request, Response, NextFunction} from "express";
import userDataType from "../type/userDataType.js";
import userHelper from "../helper/user.js";
import userRepo from "../repositary/user.js";
import { AppError } from "../utils/AppError.js";
import loginType from "../type/loginType.js";

const SECRET_KEY="secret_key";

async function addUser(req:Request, res:Response, next:NextFunction):Promise<void>{
    try{
        const data=req.body as userDataType;
        if(!data) throw next(new AppError("Data Missing",400));
        const user= await userHelper.addUser(data, next);
        
        if(!user) return;
        
        await userRepo.addUser(user,next);

        res.status(201).json({
            success:true,
            message: "Sign up successful"
        })   
        
    } catch(error){
        return next(error);
    }
}

async function login(req:Request, res:Response, next:NextFunction):Promise<void>{
    try{
       const data=req.body as loginType;
       const user=await userHelper.loginUser(data, next);

       if(!user) return;

       const userCredentials=await userRepo.loginUser(user,next);

       res.status(201).json({
        user:userCredentials,
        success:true,
        message:"Login successful"
       })

    }
    catch{

    }
}

const userController={
    addUser:addUser,
    login:login
}

export default userController;

