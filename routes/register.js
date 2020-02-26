const router = require('express').Router()
router.post("/",(req,res)=>{
    res.send({
        message:"Register"
    })
})
module.exports = router