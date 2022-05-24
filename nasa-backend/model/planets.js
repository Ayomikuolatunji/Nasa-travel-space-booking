const mongoose=require("mongoose")

const Schema=mongoose.Schema

const planetSchema=new Schema({
     kepler_name:{
         type:String,
         required:true
     }
})


module.exports=mongoose.model("planets",planetSchema)
