import { Depomodels } from "../Models/departmentsModles"
import { Empmodels } from "../Models/empmodles"
import { LEmpmodels } from "../Models/leaveemp"
import { Usermodel } from "../Models/Usermodles"

interface De{
    id:string
}
export const DEl=async({id}:De)=>{
    const serchaboutadmin= await Usermodel.findByIdAndDelete({_id:id})
    return('deleetd')
}
interface re{
    email:string,
    password:string
}
export const resetpassword=async({email,password}:re)=>{
    const findemail= await Usermodel.findOne({email:email})
    if(!findemail){
        return('the email is wrong')
    }
    const upd= await Usermodel.findOneAndUpdate({email:email},{$set:{password:password}})
    await upd?.save()
    return('updated')
}
export const Updemp=async({name,email,BD,salary}:emp)=>{
    const findemail= await Empmodels.findOne({name:name})
    if(!findemail){
        return('the name is wrong')
    }
    const upd= await Empmodels.findOneAndUpdate({email:email},{$set:{email:email,name:name,salary:salary,BD:BD}})
    await upd?.save()
    return('updated')
}
export const delemp=async({name}:emp)=>{
    const findemail= await Empmodels.findOne({name:name})
    if(!findemail){
        return('the name is wrong')
    }
    const adddeletedemp= await LEmpmodels.create({name,email:findemail.email,BD:findemail.BD,salary:findemail.salary})
    await adddeletedemp.save()
    const upd= await Empmodels.findOneAndDelete({name:name})
    return('deleted')
}
interface dep{
    nameofdepo:string
}

export const adddepo=async({nameofdepo}:dep)=>{
    const findemail= await Depomodels.findOne({nameofdepo:nameofdepo})
    if(findemail){
        return('the depo  is alreday exsit')
    }
    const upd= await Depomodels.create({nameofdepo})
    await upd?.save()
    return(upd)
}
interface emp{
    name:string
    ,email?:string
    ,BD?:string
    ,salary?:string
    ,salaryBD?:string
}
export const addemp=async({name,email,BD,salary,salaryBD}:emp)=>{
const seerchaboutemp= await Empmodels.findOne({name:name})
if(seerchaboutemp){
    return('the employees is already exsit ')
}
const addemP = await Empmodels.create({name,email,BD,salary})
await addemP.save()
return(addemP)
}