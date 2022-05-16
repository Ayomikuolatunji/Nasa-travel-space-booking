const express = require('express');
const http=require("http")
const path=require("path")
const cors=require("cors")
const morgan=require("morgan")
require("dotenv").config()
const planetsRoute=require("./routes/planents")
const {loadData}=require("./model/planets")
const launchRoute=require("./routes/launches")


const app = express();


app.use(cors())
app.use(morgan("combined"))

app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))
app.use(planetsRoute)
app.use(launchRoute)

app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname, "public", "index.html"))
})

const load=async()=>{
  await loadData()

  const server=http.createServer(app)

  server.listen(process.env.PORT,()=>{
      console.log(`app running on localhost ${process.env.PORT}`);
  })

}

load()
