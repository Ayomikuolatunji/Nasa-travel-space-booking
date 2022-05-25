const launches = require("../model/launches")




const abortLaunch=async(req,res)=>{
 const flightNumber=+req.params.id
 const launchId=await launches.findOne({flightNumber:flightNumber})
  const launch=await launches.updateOne({flightNumber:flightNumber},{
    success:false,
    upcoming:false
  })
  if(!launch){
      throw new Error("Flight number is invalid")
  }
  
  res.status(200).json({msg:"abort successfully"})
}


module.exports=abortLaunch