const express=require('express');
const app=express();
const port=3000;


// // get request with query parameter
// //http://localhost:3000/?id=500&name=indrajit (url will be like this)
// app.get('/', (req, res)=>{
//     const id=req.query.id;
//     const name=req.query.name;
//     res.send(`My id is ${id} & ${name}`);
//     res.send(`My name is ${name}`)
// })




// // get request with routes parameter
// app.get('/studentid/:id/age/:age', (req, res)=>{
//     const id=req.params.id;
//     const age=req.params.age;
//     res.send(`My id is ${id} & age is ${age}`);
   
// })


// // get request with header 
// //go to postman ther make get request from the 
// app.get('/', (req, res)=>{
//     const id=req.header("id");;
//     const age=req.header("age");
//     res.send(`My id is ${id} & age is ${age}`);
   
// })


// post request with bodyparser
//go to postman ther make get request from the 

const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
app.use(bodyParser.json())
// app.post('/user', (req, res)=>{
//     const id=req.body.id;
//     const age=req.body.age;
//     res.send(`My id is ${id} & age is ${age}`);
   
// })


//form data posting

app.get('/register', (req, res)=>{
    res.sendFile(__dirname + '/index.html')

})

app.post('/register',(req,res)=>{
    const name=req.body.name;
    const age=req.body.age;
    res.send("data submitted");
})
app.listen(port, ()=>{
    console.log("Server is running");
})