import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'


// app config 
const app = express()
const PORT = 4000

// middleware 
app.use(express.json())
app.use(cors())

// Database Connection

connectDB();

// Api endpoints

app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(PORT,()=> console.log(`Server Started on http://localhost:${PORT}`))

//mongodb+srv://HarshitKachhadiya:Projects#2024@cluster0.ceigk.mongodb.net/?