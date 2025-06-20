import express from "express";

const app = express();
const port = 8080;

app.get("/",(req,res)=>{
    console.log("hello")
    res.send("Hello From Awsadi Sewa")
});


app.listen(port,()=>{
    console.log(`Server Listening on port http://localhost:${port}`)
});