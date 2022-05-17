const launches= new Map()

let launchFlightNumber=100

const launch={
    flightNumber:launchFlightNumber,
    mission:"kepler Exploration X",
    rocket:"Explorer IS1",
    launchDate:new Date("December 27, 2030"),
    destination:"Kepler-442 b",
    customer:["MTP", "NASA"],
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
      customer:["SPACE", "MAX"],
      upcoming:true,
      success:true
    }))
}

const abortLaunchWithID=(launchId)=>{
   const getLaunch= launch.delete(launchId)
   getLaunch.upcoming=false
   getLaunch.success=false
}

module.exports={
    getLaunches,
    addLaunch,
    launchExist,
    abortLaunchWithID
}