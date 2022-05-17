const {getLaunches,addLaunch}=require("../model/launches")


const getAllLaunches=(req,res,next)=>{
    res.status(200).json(getLaunches())
}


const postLaunch=(req,res,next)=>{
    const launch=req.body

    if(!launch.mission || !launch.launchDate || !launch.rocket){
        res.status(400).json({
            message:"bad request"
        })
    }
    launch.launchDate=new Date(launch.launchDate)
    addLaunch(launch)

    return res.status(201).json(launch)
}

const deleteLaunch=()=>{

}

module.exports={postLaunch, getAllLaunches,deleteLaunch}