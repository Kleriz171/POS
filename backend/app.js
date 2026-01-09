const config = require("./config/config")
const express = require('express');
const connectDB = require("./config/database");
const globalErrorHandler = require("./middleware/globalErrorHandler");
const createHttpError = require("http-errors")
const app = express();

//routes
const userRoutes = require("./routes/userRoute");
const cookieParser = require("cookie-parser");

const PORT = config.PORT;
//db
connectDB()

//middlewares
app.use(express.json())
app.use(cookieParser())

//routes
app.get("/", (req, res)=>{

})
app.use("/api/user", userRoutes)


//error handler
app.use(globalErrorHandler)


//server start
app.listen(PORT, ()=>{
    console.log("Listening on PORT:" + PORT)
})