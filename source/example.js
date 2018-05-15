import { log } from 'util';

let simplekoa = require('./application')
let app = new simplekoa();
app.use((req,res)=>{
    res.writeHead(200);
    res.end('hello world');

});
app.listen(3000,()=>{
    console.log('listen 3000');  
})
