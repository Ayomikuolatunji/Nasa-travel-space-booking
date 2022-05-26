const mongoose=require("mongoose")

const Schema=mongoose.Schema

const launchesSchema=new Schema({
    flightNumber:{
        type:Number,
        required:true
    },
    mission:{
        type:String,
        required:true,
    },
    rocket:{
        type:String,
        required:true
    },
    launchDate:{
        type:Date,
        required:true
    },
    destination:{
        type:String,
        required:true
    },
    target:{
       type:String
    },
    customers:["MTP", "NASA"],
    upcoming:{
        type:Boolean,
        required:true
    },
    success:{
        type:Boolean,
        required:true,
        default:true
    },
    customers:{
        type:[String],
    }
})


module.exports=mongoose.model("launches",launchesSchema)
