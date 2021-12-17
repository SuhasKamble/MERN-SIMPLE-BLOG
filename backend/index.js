const express = require('express')
const cors = require('cors');
const router = require('./routes/router')
const dotenv = require('dotenv')
dotenv.config()
require('./db/conn')

const app = express()
const port = process.env.PORT || 5000

// middleware 
app.use(express.json())
app.use(cors())
app.use("/api/v1/blog/",router)

app.get("",(req,res)=>{
  res.send("Hello World!");
})

app.listen(port,()=>console.log(`Server is running on the port ${port}`))