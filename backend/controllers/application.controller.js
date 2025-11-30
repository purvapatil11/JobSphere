import { Job } from "../models/jobjob.model.js";

export const applyJob = async (req,res) => {
    try {
        const userId = req.id;
        const jobId = req.params.id;
        if(!jobId){
            return res.status(400).json({
                message:"JobId is required",
                success:false
            })
        } 
        //check if user has already applied for the job
        const  existingApplication = await Application.findOne({job: jobId, applicant: userId});
        if(existingApplication){
            return res.status(400).json({
                message:"you have already applied for the jobs",
                success: false
            })
        }
        //check if the job exists or not
        const job = await Job.findById(jobId);
        if(!job){
            return res.status(404).json({
                message: "Job not found",
                success:false
            })
        }
        //create a new application
        const newApplication = await Application.create({
            job:jobId,
            applicant: userId,
        });
        job.applicant.push(newApplication._id);
        await job.save();
        return res.status(201).json({
            message: "Job applied successfully",
            success:true
        })
    } catch (error) {
        console.log(error);
        
    }
    };
export const getAppliedJobs =async (req,res) => {
    try {
        const userId = req.id;
        const application = await Application.find({applicant:userId}).sort({createdAt :-1}).populate({
            path:'job',
            options:{sort:{createdAt : -1}},
            populate:{
                path:"company",
                 options:{sort:{createdAt : -1}},
            }
        })
        if(!application){
            return res.status(404).json({
                message:"No application",
                success:false
            })
        };
        return res.status(200).json({
            application,
            success:true
        })
       } catch (error) {
        console.log(error);
         }
    
}
//for admin: how many candidates have applied
export const getApplicants = async (req,res) => {
    try {
        const jobId = req.params;
        const job = await Job.findById(jobId).populate({
            path:'applications',
            options:{sor:{createdAt: -1}},
            populate:{
                path:'applicant'
            }
        })
        if(!job){
            return res.status(404).json({
                message:'job not found',
                success:false
            })
        };
        return res.status(200).json({
            job,
            success:true
        });
    } catch (error) {
        
    }
}
export const updateStatus = async (res,req) => {
    try {
        const{status}= req.body;
        const applicationId = req.params.id;
        if(!status){
             return res.status(400).json({
            message:'status is required',
            success:false
        });
        };
        //find the application by applicant Id
        const application = await application.findOne({_id:applicationId});
        if(!application){
            return res.status(404).json({
                message:"application not found",
                success:false
            })
        }
        //update the status
        application.status = status.tolowerCase();
        await application.save();
        return res.status(200).json({
            message:"Status update successfully",
            success:true
        });

    } catch (error) {
        console.log(error);
        
    }
}