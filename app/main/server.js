// 因为需要 使用 socket.io 进程通信，所以需要搭了服务器
const Koa = require('koa')
// 解决跨域
const cors = require('@koa/cors')

const socket = require('socket.io')

// 1. 创建 app
const koaApp = new Koa()

koaApp.use((ctx, next) => {
  ctx.body = `服务器访问成功`
})

// 服务器端口号
const server = koaApp.listen(8000, () => {
  console.log('electron 的服务器启动成功')
})

const io = socket(server, {
  cors: {
    // web 端 URL
    origin: "http://localhost:3000",
    credentials: true,
  },
})

module.exports = io;