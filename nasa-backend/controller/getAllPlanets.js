const planets = require("../model/planets")


const getAllPlanets=async(req,res,enxt)=>{
   const allPlanets=await planets.find({},{
      "_id":0,
      "__v":0
   })
   res.status(200).json(allPlanets)    
}


module.exports=getAllPlanets