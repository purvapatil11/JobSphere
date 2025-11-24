import { Job } from "../models/jobjob.model";

//--------------------job posting for admin----------------------------------------
export const postJob = async (req,res) => {
    try {
        const {title, description, requirements,salary,location,jobtype, experience,position,companyId} = req.body;
        const userId = req.id;
        
        if(!title || !description || !requirements || !salary || !location || !jobtype || !experience || !position || !companyId )
            return res.status(400)({
        "message": "Something is missing",
        success:false
    })
    const job = await Job.create({
        title,
        description,
        requirements: requirements.split(","),
        salary: Number(salary),
        location,
        jobtype,
        experienceLevel : experience,
        position: companyId,
        created_by: userId
    });
    return res.status(201).json({
        message:"new job created succcessfully........",
        job,
        success:true
    })
    } catch (error) {
console.log(error);

    }
    
}
//-----------------------keyword search----------------------------------------------
export const getAllJob = async(req,res)=>{
    try {
        //filtering
        const keyword = req.query.keyword || " ";
        const query = {
            $or: [
                {title: {$regex :keyword, $options: "i"}},
                {description: {$regex :keyword, $options: "i"}}
            ]
        };
        const jobs = await Job.find(query)
        if(!jobs){
            return res.status(404).json({
                message:"jobs not found",
                success:false
            })
        }
        return res.status(200)({
            jobs,
            success:true
        })
} catch (error) {
        console.log(error);
        }
}
//---------------------------------get job by id---------------------------------------
export const getJobById = async(req,res) =>{
    try {
        const JobId = req.params.id;
        const job = await Job.findById(jobId);
        if(!job){
            return res.status(404).json({
                message:"job not found",
                success:false
            })
        };
        return res.status(200).json({ job, success:true});
    } catch (error) {
        console.log(error);
        }
}
//-----------------------------jobs created by admin-------------------------------
export const getAdminJobs = async(req,res) =>{
    try {
        const adminId = req.id;
        const jobs = await Job.find({created_by:adminId})
        if(!jobs){
            return res.status(404).json({
                message: "Jobs not found.",
                success:false
            })
        }
        return res.status(200).json({
            jobs,
            success:true
        })
    } catch (error) {
        console.log(error);
        
    }
}