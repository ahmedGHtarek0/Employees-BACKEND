import { NextFunction } from "express";
import jwt from 'jsonwebtoken'
import { Usermodel } from "../Models/Usermodles";
export const Adminmiddleware=(req:any,res:any,next:NextFunction)=>{
const authorization = req.get('authorization')
if(!authorization){
    res.send('there is no authorization')
}
const token= authorization.split(' ')[1]
if(!token){
    res.send('there is not token ')
}
jwt.verify(token,'AdminJwt',async(err:any,payload:any)=>{
if(err){
    res.send('the token is not good')
}
if(!payload){
    res.send('the token is expired')
}
const Admin= await Usermodel.findOne({email:payload.email})
req.admin=Admin
next()
})
}