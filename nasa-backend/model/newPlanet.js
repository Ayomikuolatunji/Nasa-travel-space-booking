const {parse}=require("csv-parse")
const fs=require("fs")
const path=require("path")
const planets=require("./planets")


const habitablePlanet=[]


const isHabitable=(planet)=>{
    return planet["koi_disposition"] ==="CONFIRMED" && planet["koi_insol"] >0.36 && planet["koi_insol"] <1.11  && planet["koi_prad"] < 1.6
}

const loadData=()=>{
    return new Promise((res,rej)=>{
        fs.createReadStream(path.join(__dirname, "..","data","kepler.csv"))
        .pipe(parse({
            comment:"#",
            columns: true
        }))
        .on("data",(data)=>{
            if(isHabitable(data)){
                updatePlanets(data)
            }
        })
        .on("error",(error)=>{
            console.log(error.message);
            rej(error.message)
        })
        .on("end",()=>{ 
            res()
        })
    })
}

async function updatePlanets(data){
    try {
        await planets.updateOne({
            kepler_name:data.kepler_name
        },{
            kepler_name:data.kepler_name
        },{
            upsert:true
        })
    } catch (error) {
         console.log(error.message);
    }
}

  module.exports={
     loadData,
     planets:habitablePlanet
  }