const express=require("express")
const  getAllLaunches=require("../controller/getLaunches")


const router=express.Router()

router.get("/",getAllLaunches)


module.exports=router