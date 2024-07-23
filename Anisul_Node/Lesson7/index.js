// Lecture no 9: https://www.youtube.com/watch?v=Vlk4UPzi6tc&list=PLgH5QX0i9K3r6ZGeyFnSv_YDxVON2P85m&index=9 
//login in heroku
const http=require('http');
const fs=require('fs');
const port=process.env.PORT;
const hostname= '127.0.0.1';
const myServer=http.createServer((req,res)=>{

    const handleReadFile=(statusCode,fileName)=>{
       
        fs.readFile(fileName, (err,data)=>{
             res.writeHead(statusCode,{"Content-Type":'text/html'});
             res.write(data);
             res.end();    
        })
       
    }
    if(req.url=='/')
        handleReadFile(200,'./views/index.html');
    else if(req.url=='/about')
        handleReadFile(200,'./views/about.html')
    else if(req.url=='/contact')
        handleReadFile(200,'./views/contact.html')
    else
        handleReadFile(404,'./views/error.html')
})

myServer.listen(port, hostname, ()=>{
    console.log(`Server is running at http://${hostname}:${port}`);
})
