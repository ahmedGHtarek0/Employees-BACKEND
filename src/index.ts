import express from 'express'
import mongoose  from 'mongoose'
import { Usermodel } from './Models/Usermodles';
import jwt from 'jsonwebtoken'
import { Adminmiddleware } from './middleware/middlewares';
import Adminroutes from './routes/Adminroutes';
const app=express()
const port =3010;
mongoose
.connect("mongodb://localhost:27017/EMS")
.then(()=> console.log("MongoDB connected !"))
.catch((err)=>console.log("faild to connect cause ", err))
app.use(express.json())//middleware built in express who change the json in the req and but in the req.body
// EMS
app.post('/register',async(req,res)=>{
    const {name,email,password}=req.body
    if(!name||!email||!password){
        res.status(200).send('all fialds are requierd')
    }
    const seerchaboutuser= await Usermodel.findOne({email})
    if(seerchaboutuser){
        res.status(200).send('the user already exsit')
    }
    const adduser= await Usermodel.create({name,email,password})
    await adduser.save()
    res.send(genertajwt({name,email,password}))
})
app.post('/login',async(req,res)=>{
    const {email,password}=req.body
    if(!email||!password){
        res.status(200).send('all fialds are requierd')
    }
    const seerchaboutuser:any= await Usermodel.findOne({email})
    if(!seerchaboutuser){
        res.status(200).send('the email is not exsit')
    }
    if(seerchaboutuser.password!==password){
        res.status(200).send('the password is wrong')
    }
    const   newame=seerchaboutuser.name
    res.send(genertajwt({newame,email,password}))
})
function genertajwt(data:any){
return jwt.sign(data,'AdminJwt')
}
// app.get('/check',Adminmiddleware,async(req:any,res)=>{
//     res.send('good'
//     )
// })
app.use('/Admin',Adminroutes)
app.listen(port,()=>{
    console.log(`srever is ruunig at http://localhost:${port}`)
})