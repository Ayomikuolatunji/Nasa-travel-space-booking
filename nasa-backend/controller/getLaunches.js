const {launches}=require("../model/launches")


const getAllLaunches=(req,res,next)=>{
    res.status(200).json(Array.from(launches.values()))
}

module.exports=getAllLaunches