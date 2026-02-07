const mongoose=require("mongoose")

//connectiong data base
async function connectDb() {
    //cluser
    await mongoose.connect("mongodb+srv://nischal_user_01:4K5RGjFD7xHTGvfr@backend.d0rean1.mongodb.net/CRUD_project")
    console.log("Connected to Database"); 
    
}
module.exports=connectDb