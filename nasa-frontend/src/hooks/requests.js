const localhost='http://localhost:8080/v1'

async function httpGetPlanets() {
  // TODO: Once API is ready.
  const res=await fetch(`${localhost}/planets`)
  return await res.json()

  // Load planets and return as JSON.
}

async function httpGetLaunches() {
  const res=await fetch(`${localhost}/launches`)
  const fetchLaunch= await res.json()
  return fetchLaunch
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
   try {
    const res=await fetch(`${localhost}/launches`,{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(launch)
    })
    console.log(res);
    return await res.json()
   } catch (error) {
      return {
        ok:false
      }
   }

  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
    try {
       return await fetch(`${localhost}/launches/${id}`,{
        method:"delete",
      })
    } catch (error) {
        return {
          ok:false
        }
    }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};