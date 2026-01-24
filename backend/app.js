const config = require("./config/config")
const express = require('express');
const connectDB = require("./config/database");
const globalErrorHandler = require("./middleware/globalErrorHandler");
const createHttpError = require("http-errors")
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors")


//routes
const userRoutes = require("./routes/userRoute");
const orderRoutes = require("./routes/orderRoute")
const tableRoutes = require("./routes/tableRoute")

const PORT = config.PORT;
//db
connectDB()

//middlewares
app.use(cors({
    credentials: true,
    origin: ['http://localhost:5173']
}))
app.use(express.json())
app.use(cookieParser())


//routes
app.get("/", (req, res) => {

})
app.use("/api/user", userRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/table", tableRoutes)

//error handler
app.use(globalErrorHandler)


//server start
app.listen(PORT, () => {
    console.log("Listening on PORT:" + PORT)
})