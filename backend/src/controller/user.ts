import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../model/user.js";
import userDataType from "../type/userDataType.js";
import userHelper from "../helper/user.js";
import userreposit from "../repositary/user.js";

const SECRET_KEY="secret_key";

async function addUser(req:Request, res:Response, next:NextFunction):Promise<void>{
    try{
        const data=req.body as userDataType;
        const user= await userHelper.addUser(data, next);
        
        if(!user) return;
        
        await userreposit.addUser(user,next);

        res.status(201).json({
            success:true,
            message: "Sign up successfull"
        })   
        
    } catch(error){
        next(error);
    }
}

const userController={
    addUser:addUser
}

export default userController;

