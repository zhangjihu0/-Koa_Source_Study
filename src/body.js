const Koa  =  require('koa');
const querystring =  require('querystring');
const app =  new Koa();
app.listen(8080);
// GET /user 返回一个空白 表单
// POST /user  表示提交 用户注册请求
app.use(async function(ctx,next){
    if(ctx.url == '/user'&& ctx.method == 'GET'){
        ctx.set('Content-type','text/html;')
        `
            <form>
                <input type='text' name='username' />
                <input type ='submit' />
            </form>
        `
    }else{
        await next()
    }
});
//执行顺序1,2,a
app.use(async function(ctx,next){
    if(ctx.url == '/user'&& ctx.method == 'POST'){
     ctx.body  = await parse(ctx.req);
    }else{
        await next();
    }
})
function parse(req){
    return new Promise(function(resolve,reject){
        let buffers = [];
        req.on('data',function(data){
            buffers.push(data)
        })
        req.on('end',function(data){
            let result = Buffer.concat(buffers);
            //console.log(result.toString());
            //ctx.body = result;   
            resolve(querystring.parse(result.toString()));       
        })
    })
}