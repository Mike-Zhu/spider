const Koa = require('koa');
const serve = require('koa-static');
const render = require('koa-ejs');
const path = require('path')
const pkg = require('./package')
const router = require('./router')

//端口
const port = pkg.config.port
const staticPath = pkg.config.vd
const app = new Koa();

//static
const static = serve(__dirname + '/websource')

//设置layout
render(app, {
    root: path.join(__dirname, 'websource'),
    layout: `layout/index`,
    viewExt: 'html',
    cache: true,
    debug: false,
});

//去除基准path
app.use(async (ctx, next) => {
    ctx.url.startsWith(staticPath)
    ctx.url = ctx.url.replace(staticPath, '')
    await next()
})

app.use(static)
app.use(router.routes());
app.listen(port)
console.log(`listen on ${port}`)
