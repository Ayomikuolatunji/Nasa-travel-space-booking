const {planets}=require("../model/planets")

const getAllPlanets=async(req,res,enxt)=>{

   res.status(200).json(planets)    
}


module.exports=getAllPlanets