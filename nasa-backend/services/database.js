const mongoose=require("mongoose")


mongoose.connection.once("open",()=>{
    console.log("mongodb connection ready");
})

mongoose.connection.on("error",err=>{
    console.log(err.message);
})

const MongooseConnect=(key)=>{
  return  mongoose.connect(key,{
    useNewUrlParser: true,
    useUnifiedTopology: true ,
  })
}


module.exports=MongooseConnect