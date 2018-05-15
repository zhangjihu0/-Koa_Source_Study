// let http = require('http');
// let server = http.createServer((req, res) => {
//     res.writeHead(200);
//     res.end('hello world');
// });
// server.listen(3000, () => {
//     console.log('listenning on 3000');
// });


let simpleKoa = require('./application');
let app = new simpleKoa;
app.use((req,res)=>{
    res.writeHead(200);
    res.end('hello word');

});
app.listen(3000,()=>{
    console.log('listening on 3000');
    
})