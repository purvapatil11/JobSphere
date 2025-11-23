import mongoose from "mongoose";
const applicationSchema = new mongoose.Schema({
    job:{
        type:mongoose.Schema.type.ObjectId,
        ref:'job',
        required:true
    },
    applicant:{
         type:mongoose.Schema.type.ObjectId,
        ref:'User',
        required:true 
    },
    status:{
        type:String,
        enum:['pending','accepted','rejected'],
        default:'pending'
    }
},{timestamps:true})
export const application = mongoose.model("application",applicationSchema);