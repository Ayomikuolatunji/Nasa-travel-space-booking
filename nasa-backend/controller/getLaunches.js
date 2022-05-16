const {getLaunches}=require("../model/launches")


const getAllLaunches=(req,res,next)=>{
    res.status(200).json(getLaunches())
}

module.exports=getAllLaunches