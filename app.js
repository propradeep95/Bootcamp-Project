const express = require("express");
const app = express();
const dotenv = require('dotenv');

dotenv.config({path:"./config/.env"});
console.log(process.env)

const port = 5000

// app.post("api/v1/bootcamp", (req,res)=>{
//     res.json({message: "Bootcamp got Created"})
// })
// app.get("api/v1/bootcamp", (req,res)=>{
//     res.json({message: "All Bootcamp got Fetched"})
// })

app.get("/api/v1/bootcamp", (req,res)=>{
    res.json({message: "Bootcamps `` got Fetched"})
})












app.listen(port, () =>{
    console.log(`Bootcamp app listening at http://localhost:${port} in ${process.env.NODE_ENV}`)
})