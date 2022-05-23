const express=require("express")
const http=require("http")
const path=require("path")
const cors=require("cors")
const morgan=require("morgan")
const bodyParser=require("body-parser");
require("dotenv").config()
const app=require("./server")
const planetsRoute=require("./routes/planents")
const {loadData}=require("./model/planets")
const launchRoute=require("./routes/launches")

app.use(express.json())

app.use(bodyParser.json())
app.use(cors())
// app.use(morgan("combined"))

app.use(express.static(path.join(__dirname, "public")))
app.use(planetsRoute)
app.use(launchRoute)

app.post("/users",(req,res,next)=>{
  const name=req.body.name
    res.status(200).json(name)
})

app.get("/*",(req,res)=>{
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
