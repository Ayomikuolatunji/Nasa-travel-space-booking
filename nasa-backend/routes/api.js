const express=require("express")
const planetsRoute=require("./planents")
const launchRoute=require("./launches")

const api=express.Router()


api.use(planetsRoute)
api.use(launchRoute)

module.exports=api