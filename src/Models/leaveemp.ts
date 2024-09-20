import mongoose,{Schema,Document} from "mongoose";
interface Ilog extends Document{
    name:string,
    email:string,
    BD:string,
    salary:string
    salaryBD:string
}
const scmeaofuser= new Schema<Ilog>({
    name:{type:String,required:true},
    email:{type:String,required:true},
    BD:{type:String,required:true},
    salary:{type:String,required:true},
    salaryBD:{type:String,}
},{timestamps:true})
export const LEmpmodels= mongoose.model<Ilog>('Lemp',scmeaofuser)