const mongoose=require("mongoose")

//connectiong data base
async function connectDb() {
    //cluser
    await mongoose.connect(process.env.DATABASE_URL)
    console.log("Connected to Database"); 
    
}
module.exports=connectDb