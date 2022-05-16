const {getLaunches,addLaunch}=require("../model/launches")


const getAllLaunches=(req,res,next)=>{
    res.status(200).json(getLaunches())
}


const postLaunch=(req,res,next)=>{
    const launch=req.body
    launch.launchDate=new Date(launch.launchDate)
    addLaunch(launch)

    return res.status(201).json(launch)
}

module.exports={postLaunch, getAllLaunches}