const express=require("express")
const  {getAllLaunches}=require("../controller/getLaunches")
const postLaunch=require("../controller/createLaunch")
const abortLaunch = require("../controller/abortLaunch")


const router=express.Router()

router.get("/launches",getAllLaunches)
router.post("/launches",postLaunch)
router.delete("/launches/:id",abortLaunch)

module.exports=router