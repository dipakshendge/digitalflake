require('dotenv').config();
const express = require("express");
const authRouter = require("./routes/authRoute")
const cityRouter = require("./routes/dataRoute")
let cors= require("cors");

const app = express();
const Port = 5000;
const connectDb = require("./utils/db");
const errorMiddleware = require('./middlewares/errorMiddleware');
app.use(express.json())
var corsOptions = { 
    origin: "http://localhost:5173",   
    methods:"GET, POST, PUT, DELETE, HEAD", 
    credentials:true               
  }
  
  app.use(cors(corsOptions));

 app.use('/api/auth', authRouter)
 app.use('/api/data', cityRouter)
app.use(errorMiddleware)
connectDb().then(() =>{
    app.listen(Port,() => {
        console.log(`Server Is lisning at port ${Port}`);
    })
});