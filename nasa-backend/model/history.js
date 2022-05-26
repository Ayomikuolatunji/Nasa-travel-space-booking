const  axios  = require("axios")


const url="https://api.spacexdata.com/v4/launches/query"


async function loadLaunchData(){

    const response= await axios.post(url, {
        query:{},
        options:{
            populate:[
                {
                  path:"rocket",
                  select:{
                      name:1
                  }
                },
                {
                    path:"payloads",
                    select:{
                        customers:1
                    }
                }
            ]
        }
        
    })


    const launchDocs=response.data.docs
    for(let launchData of launchDocs){
        const payloads=launchData['payloads']
         const customers=payloads.flatMap((payload)=>{
            return payload['customers']
        })
      const launch={
          flightNumber:launchData['flight_number'],
          mission:launchData['name'],
          rocket:launchData['rocket']['name'],
          launchDate:launchData['date_local'],
          upcoming:launchData['upcoming'],
          success:launchData['success'],
          customers
      }
      console.log(launch);
    }

}


module.exports=loadLaunchData