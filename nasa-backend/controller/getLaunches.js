const {launchExist, abortLaunchWithID}=require("../model/launches")

const lauches=require("../model/newLaunches")


const getAllLaunches=async(req,res,next)=>{
     const allLaunch=await lauches.find({})
     return res.status(200).json(allLaunch)
}


const deleteLaunch=(req,res)=>{
    const requestId=+req.params.id
    if(!launchExist(requestId)){
        res.status(400).json({
            error:"bad request"
        })
    }
    const aborted= abortLaunchWithID(requestId)
    return res.status(200).json(aborted)
}

module.exports={getAllLaunches,deleteLaunch}