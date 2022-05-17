const launches= new Map()

let launchFlightNumber=100

const launch={
    flightNumber:launchFlightNumber,
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


console.log(launches);

const getLaunches=()=>{
    return Array.from(launches.values())
}

const addLaunch=(launch)=>{
    launchFlightNumber++;
   return launches.set(launch.flightNumber, Object.assign(launch,{
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