import express from 'express'
import { Adminmiddleware } from '../middleware/middlewares'
import { adddepo, addemp, DEl, delemp, resetpassword, Updemp } from '../services/Adminservicse'
const route = express.Router()
route.delete('/delete/:id',Adminmiddleware,async(req:any,res)=>{
    const {id}=req.params
    const deleteD= await DEl({id})
    res.send(deleteD)
})
route.put('/reset',Adminmiddleware,async(req:any,res)=>{
   const {email,password}=req.body
   if(!email||!password){
    res.send('all fields are required')
   }
    const updD= await resetpassword({email,password})
    res.send(updD)
})
route.post('/AddDepo',Adminmiddleware,async(req:any,res)=>{
   const {nameofdepo}=req.body
   if(!nameofdepo){
    res.send('all fields are required')
   }
    const updD= await adddepo({nameofdepo})
    res.send(updD)
})
route.post('/Addemp',Adminmiddleware,async(req:any,res)=>{
   const {name,email,BD,salary,salaryBD}=req.body
    const updD= await addemp({name,email,BD,salary})
    res.send(updD)
})
route.put('/Updemp',Adminmiddleware,async(req:any,res)=>{
   const {name,email,BD,salary,salaryBD}=req.body
    const updD= await Updemp({name,email,BD,salary})
    res.send(updD)
})
route.delete('/delemp',Adminmiddleware,async(req:any,res)=>{
   const {name}=req.body
    const updD= await delemp({name})
    res.send(updD)
})

export default route
