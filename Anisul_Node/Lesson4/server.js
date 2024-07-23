const http=require('http');
const hostname = '127.0.0.1'
const port=3000;

const myServer=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.write("Indrani Paul");
    res.write('<h1>Mimi Paul</h1>');
    res.end();
});

myServer.listen(port,hostname ,()=>{
    console.log(`My server is running in http://${hostname}:${port}`);
})

