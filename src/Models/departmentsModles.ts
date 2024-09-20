import mongoose,{Schema,Document} from "mongoose";
interface Ilog extends Document{
   nameofdepo:string
}
const scmeaofuser= new Schema<Ilog>({
    nameofdepo:{type:String,required:true},
})
export const Depomodels= mongoose.model<Ilog>('Departement',scmeaofuser)