const express=require('express');
const app=express();


// //by default browser provide get request, but can't any other request from the browser, that's why we will use postman, we have to give the url(here http://localhost:3000/)  and select the request type, then can see the response in postman

// app.get('/', (req, res)=>{
//     res.send("I am a get request");
// })

// app.put('/', (req, res)=>{
//     res.send("I am a put request");
// })

// app.post('/', (req, res)=>{
//     res.send("I am a post request");
// })

// app.delete('/', (req, res)=>{
//     res.send("I am a delete request");
// })
// module.exports=app;



const userRouter=require('./users.routes')

app.use("/api/user/",userRouter);


//for json format data
app.use('/json', (req,res)=>{
    res.status(200).json({
        name:"mimipaul",
        address:"RCC Lane"
    })
})

//sending html file
app.get('/', (req,res)=>{
    res.statusCode=200;
    res.sendFile( __dirname +'/view/index.html');
})

app.get('/register', (req,res)=>{
    res.statusCode=200;
    res.sendFile( __dirname + '/view/register.html');
   
})

app.get('/cookie', (req,res)=>{
    res.statusCode=200;
    res.cookie('name', 'Gublu'); //creating cookie
    // res.cookie('age',10);
    res.clearCookie('age') // removing cookie
   res.end();
})

app.use((req, res)=>{
    res.send('404! not found');
  
})

module.exports=app;