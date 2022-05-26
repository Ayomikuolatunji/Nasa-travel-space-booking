const express=require("express")
const http=require("http")
const path=require("path")
const cors=require("cors")
// const morgan=require("morgan")
const bodyParser=require("body-parser");
require("dotenv").config()
const app=require("./server")
const {loadData}=require("./model/newPlanet")
const MongooseConnect = require("./services/database");
const api = require("./routes/api");
const payload=require("./model/history")

app.use(express.json())

app.use(bodyParser.json())
app.use(cors())
// app.use(morgan("combined"))



app.use(express.static(path.join(__dirname, "public")))
app.use("/v1",api)
app.get("/*",(req,res)=>{
  res.sendFile(path.join(__dirname, "public", "index.html"))
})

const load=async()=>{
  try {
     await MongooseConnect(process.env.MONGODB_KEY)
     await loadData()
     await payload()

     console.log("connected to the database");
     const server=http.createServer(app)

     server.listen(process.env.PORT,()=>{
      console.log(`app running on localhost ${process.env.PORT}`);
    })

  } catch (error) {
     console.log(error.message)
  }

}

load()
