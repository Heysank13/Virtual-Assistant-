import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config()
import express from "express";
import connectDb from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js"
import cors from "cors"



const app=express();
app.use(cors({
    origin:"https://virtual-assistant-7rwu.onrender.com",
    credentials:true
}))
const port=process.env.PORT || 5000
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)


app.listen(port, ()=>{
    connectDb()
    console.log("Server Started")
})
