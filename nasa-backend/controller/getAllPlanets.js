const planets = require("../model/planets")


const getAllPlanets=async(req,res,enxt)=>{
   const allPlanets=await planets.find({})
   res.status(200).json(allPlanets)    
}


module.exports=getAllPlanets