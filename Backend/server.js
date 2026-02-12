// always should be on top else show error
require("dotenv").config();

const app=require("./src/app");
const connectDB=require("./src/db/db")

connectDB()

const PORT = process.env.PORT || 3000;

//starts the server
app.listen(3000,()=>{
    console.log("server is running on port 3000 .....");
    
})

