const lauches=require("../model/launches")
const pagination = require("../services/query")


const getAllLaunches=async(req,res,next)=>{
     const {skip,limit} =pagination(req.query)
     const allLaunch=await lauches.find({})
     .skip(skip)
     .limit(limit)
     return res.status(200).json(allLaunch)
}


module.exports={getAllLaunches}