const config = require("./config/config")
const express = require('express');
const connectDB = require("./config/database");
const globalErrorHandler = require("./middleware/globalErrorHandler");
const createHttpError = require("http-errors")
const app = express();

//routes
const userRoutes = require("./routes/userRoute")

const PORT = config.PORT;
//db
connectDB()

//routes
app.get("/", (req, res)=>{

    const err = createHttpError(404, "smth went wrong")
    throw err
    res.json({message: "Hello from POS server"})
})
app.use("/api/user", userRoutes)


//error handler
app.use(globalErrorHandler)


//server start
app.listen(PORT, ()=>{
    console.log("Listening on PORT:" + PORT)
})