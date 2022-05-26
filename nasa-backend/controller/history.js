const loadLaunchData = require("../model/history");
const launches = require("../model/launches")




const loadLaunches=async()=>{

const findLaunch=await launches.findOne({
     flightNumber:1,
     rocket:"Falcon 1",
     mission:"FalconSat"
})
  if(findLaunch){
      console.log("launches already exits");
  }else{
    const launchData=await loadLaunchData()
    await launches.create(launchData)
  }
}


module.exports=loadLaunches