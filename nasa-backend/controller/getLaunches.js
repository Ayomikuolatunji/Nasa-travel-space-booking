const lauches=require("../model/launches")


const getAllLaunches=async(req,res,next)=>{
     const allLaunch=await lauches.find({})
     return res.status(200).json(allLaunch)
}


module.exports={getAllLaunches}