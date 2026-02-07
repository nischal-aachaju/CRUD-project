const express=require("express")
const app=express()
const multer =require("multer")
const upload = multer({storage:multer.memoryStorage()})

app.post("/create-post",upload.single("image") ,async(req,res)=>{

     
    console.log( req.body);
    console.log( req.file);
    
    
    res.status(201).json({
        message:"posted"
    })
})


module.exports=app