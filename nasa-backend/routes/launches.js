const express=require("express")
const  {getAllLaunches,postLaunch, deleteLaunch}=require("../controller/getLaunches")


const router=express.Router()

router.get("/launches",getAllLaunches)
router.post("/launches",postLaunch)
router.delete("/launches/:id",deleteLaunch)

module.exports=router