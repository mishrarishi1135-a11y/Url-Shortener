import express from "express";
const app = express();  // create an instance for this

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})