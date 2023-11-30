import express from "express"
import r_api from "./api/v1/0_routers/route_api"

const app = express()


// Middleware


// Routes
app.get("/",(req,res)=>{
	console.log("Someone has hit / route!")
	res.send("hi this is / route")
})

app.use("/api",r_api)



export default app