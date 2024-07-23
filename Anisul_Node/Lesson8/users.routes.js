const express=require('express');
const router=express.Router();


router.get('/', (req, res)=>{
    res.send("I am a get request");
})

router.get('/about', (req, res)=>{
    res.send("About page");
})

router.get('/login', (req, res)=>{
    res.send("I am login page");
})

router.get('/signup', (req, res)=>{
    res.send("I am a signup page");
})


module.exports=router;