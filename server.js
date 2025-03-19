const express= require("express");
const cors=require("cors");
const connectDB = require("./config/db");
const router = require("./routes/authroutes");
const cartrouter = require("./routes/cartRoutes");
const app= express();

app.use(cors({
    origin:"frontend-321uvmfrq-rajesh-s-projects-3600510b.vercel.app"
  }))
app.use(express.json())
connectDB()
app.use("/auth",router)   
app.use("/cart",cartrouter)
app.get('/' , (req ,res)=>{
    res.send("hello world")
})
const port = 5000

app.listen(port, ()=>{
console.log(`server is running on port ${port}`)
}
)