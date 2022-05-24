const launches = require("../model/launches")




const abortLaunch=async(req,res)=>{
 const flightNumber=+req.params.id
  const launch=await launches.findOneAndDelete({flightNumber:flightNumber})
  if(!launch){
      throw new Error("Flight number is invalid")
  }
  
  res.status(200).json({msg:"abort successfully"})
}


module.exports=abortLaunch