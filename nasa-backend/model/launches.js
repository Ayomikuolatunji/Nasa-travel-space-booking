const mongoose=require("mongoose")

const Schema=mongoose.Schema

const launchesModel=new Schema({
    flightNumber:{
        type:Number,
        required:true
    },
    mission:{
        type:String,
        required:true,
    },
    rocket:{
        type:String,
        required:true
    },
    launchDate:{
        type:Date,
        required:true
    },
    destination:{
        type:String,
        required:true
    },
    target:{
       type:String, 
       required:true
    },
    customers:["MTP", "NASA"],
    upcoming:{
        type:Boolean,
        required:true
    },
    success:{
        type:Boolean,
        required:true,
        default:true
    }
})


























const launches= new Map()

let launchFlightNumber=100

const launch={
    flightNumber:100,
    mission:"kepler Exploration X",
    rocket:"Explorer IS1",
    launchDate:new Date("December 27, 2030"),
    destination:"Kepler-442 b",
    customers:["MTP", "NASA"],
    upcoming:true,
    success:true
}

launches.set(launch.flightNumber, launch)

const launchExist=(launch)=>{
     return launches.has(launch)
}

const getLaunches=()=>{
    return Array.from(launches.values())
}

const addLaunch=(launch)=>{
    launchFlightNumber++;
    launches.set(launch.flightNumber, Object.assign(launch,{
      flightNumber:launchFlightNumber,
      customers:["SPACE", "MAX"],
      upcoming:true,
      success:true
    }))
}

const abortLaunchWithID=(launchId)=>{
   const aborted= launches.get(launchId)
   aborted.upcoming=false
   aborted.success=false
   return aborted
}

module.exports={
    getLaunches,
    addLaunch,
    launchExist,
    abortLaunchWithID
}