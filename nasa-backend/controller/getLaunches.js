const {getLaunches,addLaunch,launchExist}=require("../model/launches")


const getAllLaunches=(req,res,next)=>{
    res.status(200).json(getLaunches())
}


const postLaunch=(req,res,next)=>{
    const launch=req.body

    if(!launch.mission || !launch.launchDate || !launch.rocket){
        res.status(400).json({
            error:"bad request"
        })
    }
    launch.launchDate=new Date(launch.launchDate)
    addLaunch(launch)

    return res.status(201).json(launch)
}

const deleteLaunch=(req,res)=>{
    const requestId=req.params.id
    if(!launchExist()){
        res.status(400).json({
            error:"bad request"
        })
    }

    return res.status(200).json(aborted)
}

module.exports={postLaunch, getAllLaunches,deleteLaunch}