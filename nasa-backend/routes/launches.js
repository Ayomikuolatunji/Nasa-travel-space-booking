const express=require("express")
const  {getAllLaunches,postLaunch}=require("../controller/getLaunches")


const router=express.Router()

router.get("/launches",getAllLaunches)
router.post("/launches",postLaunch)

module.exports=router