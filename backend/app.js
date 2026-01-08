const config = require("./config/config")
const express = require('express');
const connectDB = require("./config/database")
const app = express();

const PORT = config.PORT;
connectDB()

app.get("/", (req, res)=>{
    res.json({message: "Hello from POS server"})
})

app.listen(PORT, ()=>{
    console.log("Listening on PORT:" + PORT)
})