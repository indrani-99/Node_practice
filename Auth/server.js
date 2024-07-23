const express=require('express');
const { connectionWithDB } = require('./src/config/db');
const { userRouter } = require('./src/routes/user.route');
require('dotenv').config();
const app=express();

app.use(express.json());
app.use('/user',userRouter);

app.get('/', (req,res)=>{
    res.send("This is home route");
})
app.listen(process.env.PORT, async()=>{
    connectionWithDB();
    console.log(`Server is running at ${process.env.PORT}`);
})