const launches = require("../model/launches")




const abortLaunch=async(req,res,next)=>{
 const flightNumber=req.body
  const launch=await launches.findOneAndDelete({ flightNumber:100})
  if(!launch){
      throw new Error("Flight number is invalid")
  }
  res.status(200).json({msg:"abort successfully"})
}


module.exports=abortLaunch