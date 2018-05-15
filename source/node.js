let http = require('http');
let server = http.createServer((req,res)=>{
    res.writeHead(200);
    res.end('hello word')
})
server.listen(3000,()=>{
    console.log('listen 3000');
})