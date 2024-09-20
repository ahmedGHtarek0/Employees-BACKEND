import mongoose,{Schema,Document} from "mongoose";
interface Ilog extends Document{
    name:string,
    email:string,
    password:string
}
const scmeaofuser= new Schema<Ilog>({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
})
export const Usermodel= mongoose.model<Ilog>('User',scmeaofuser)