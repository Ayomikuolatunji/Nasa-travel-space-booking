const localhost='http://localhost:8080'

async function httpGetPlanets() {
  // TODO: Once API is ready.
  const res=await fetch(`${localhost}/planets`)
  return await res.json()

  // Load planets and return as JSON.
}

async function httpGetLaunches() {
  const res=await fetch(`${localhost}/launches`)
  const fetchLaunch= await res.json()
  return fetchLaunch.sort((a,b)=>{
    return a.flightNumber-b.flightNumber
  })
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};