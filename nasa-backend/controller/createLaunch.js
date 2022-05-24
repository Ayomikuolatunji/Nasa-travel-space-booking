const lauches=require("../model/newLaunches")

const postLaunch=async(req,res,next)=>{
    const launch=req.body

    // if(!launch.mission || !launch.launchDate || !launch.rocket){
    //     res.status(400).json({
    //         error:"bad request"
    //     })
    // }
     const findLaunchNum=await lauches.findOne({launch:lauches.flightNumber})
     let outputLanuch;
     if(findLaunchNum){
         try {
            const newLaunch=await lauches.create({
                flightNumber:launch.flightNumber+1,
                mission:"kepler Exploration X",
                rocket:"Explorer IS1",
                launchDate:launch.launchDate,
                target:launch.target,
                destination:"Kepler-442 b",
                customers:["MTP", "NASA"],
                upcoming:true,
                success:true
             }) 
             outputLanuch=newLaunch
         } catch (error) {
             
         }
     }else{
        try {
            const newLaunch=await lauches.create({
                flightNumber:launch.flightNumber,
                mission:"kepler Exploration X",
                rocket:"Explorer IS1",
                launchDate:launch.launchDate,
                target:launch.target,
                destination:"Kepler-442 b",
                customers:["MTP", "NASA"],
                upcoming:true,
                success:true
             })
             outputLanuch=newLaunch
        } catch (error) {
             console.log(err.message);
        }
     }

          
     
     return res.status(201).json(outputLanuch)
}


module.exports=postLaunch