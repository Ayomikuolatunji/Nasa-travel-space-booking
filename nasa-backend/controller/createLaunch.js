const lauches=require("../model/launches")
const planets = require("../model/planets")

const postLaunch=async(req,res,next)=>{
    let defaultLaunchNum=100
     try {
        const launch=req.body
    
        if(!launch.mission || !launch.launchDate || !launch.rocket){
            res.status(400).json({
                error:"bad request"
            })
        }
        const findOne=await planets.findOne({
            kepler_name:launch.destination
        })
        if(!findOne){
            throw new Error("No matching planets was found")
        }
        const flightNumIncrement=await lauches
        .findOne()
        .sort("-flightNumber")
        if(flightNumIncrement){
            defaultLaunchNum=flightNumIncrement.flightNumber+1
        }

        const newLaunch=await lauches.create({
            flightNumber:defaultLaunchNum,
            mission:launch.mission,
            rocket:launch.rocket,
            launchDate:launch.launchDate,
            target:launch.destination,
            destination:launch.destination,
            customers:["MTP", "NASA"],
            upcoming:true,
            success:true
         })
              
     return res.status(201).json(newLaunch)
    } catch (err) {
         console.log(err.message);
    }
          
}


module.exports=postLaunch