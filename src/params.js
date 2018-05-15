const Koa  =  require('koa');
const app =  new Koa();
//获取koa的请求参数
//params =>参数；
//query =>查询；
app.use(async function(ctx,next){
    console.log(ctx.method);
    console.log(ctx.url);
    console.log(ctx.headers);
    console.log(ctx.querystring);//查询字符串原始字符串
    console.log(ctx.query);//对象
    

    
    /**
     * 1.字符串 Buffer
     * 2. 对象
     * 3. 流
     * 
    */
    ctx.body = ctx.headers;
    //ctx.res.write('hello');在koa里不能直接通过这种写入响应体
   // ctx.response.body = ctx.headers; //与上面的的一致
    
});
//执行顺序1,2,a
app.use(async function(ctx,next){
    console.log('a');    
})

app.listen(8080);

