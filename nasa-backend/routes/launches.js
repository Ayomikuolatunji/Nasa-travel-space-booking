const express=require("express")
const  getAllLaunches=require("../controller/getLaunches")


const router=express.Router()

router.get("/launches",getAllLaunches)


module.exports=router