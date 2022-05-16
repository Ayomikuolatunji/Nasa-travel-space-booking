const express=require("express")
const getAllPlanets=require("../controller/getAllPlanets")

const router=express.Router()

router.get("/planets", getAllPlanets)


module.exports=router