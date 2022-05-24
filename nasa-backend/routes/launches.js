const express=require("express")
const  {getAllLaunches}=require("../controller/getLaunches")
const postLaunch=require("../controller/createLaunch")


const router=express.Router()

router.get("/launches",getAllLaunches)
router.post("/launches",postLaunch)
// router.delete("/launches/:id",deleteLaunch)

module.exports=router