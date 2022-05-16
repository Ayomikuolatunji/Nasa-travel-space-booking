const launches= new Map()

const launch={
    flitNumber:100,
    mission:"kepler Exploration X",
    rocket:"Explorer IS1",
    launchDate:new Date("December 27, 2030"),
    desination:"Kepler-442 b",
    customers:["MTP", "NASA"],
    upcoming:true,
    success:true
}

launches.set(launch.flitNumber, launch)

module.exports={
    launches
}