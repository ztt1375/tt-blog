/**
 * @author
 * @file server端的入口文件
 */

import 'source-map-support/register'
//koa处理post请求的插件
import bodyParser from 'koa-bodyparser'
//koa本身的框架
import Koa from 'koa'
//koa打印日志的插件
import logger from 'koa-logger'
//支持https的模块
import helmet from 'koa-helmet'
//跨域的模块
import cors from 'koa-cors'
//集中处理所有错误的模块
import onerror from 'koa-onerror'
//路由
import routing from './routes/'
//端口号
import {port} from './config'

const app = new Koa()

onerror(app)

app.use(cors({
        maxAge: 7 * 24 * 60 * 60,
        credentials: true,
        methods: 'GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE',
        headers: 'Content-Type, Accept, Authorization'
    }))
    .use(logger())
    .use(bodyParser())
    .use(helmet())

routing(app)

app.listen(port, () => console.log(`✅  The server is running at http://localhost:${port}/`))
