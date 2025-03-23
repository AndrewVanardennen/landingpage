import koa from 'koa'
import koaStatic from 'koa-static'

const app = new koa()
app.use(koaStatic('www'))
app.listen(3000)
console.log('http://localhost:3000')
