const { default: axios } = require("axios")


const url="GET https://api.spacexdata.com/v4/launches/query"


async function loadLaunchData(){
    await axios.post(url, {
        query:{},
        options:{
            populate:[
                {
                  path:"rocket",
                  select:{
                      name:1
                  }
                }
            ]
        }
    })
}