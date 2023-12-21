//สร้างเว็บฝั่ง Server เพื่อตอบสนอง url เหล่านี้
//1. Homepage -> "/"
//2. About page -> "/about"
require('dotenv').config()
const http = require('http')

const {APP_PORT} = process.env

const server = http.createServer((request, response) => {
    const { method, url } = request

    let content = ''
    if (method === 'GET' && url === '/'){
        content = '<h1>Homepage Mint</h1>'
    }
    else if(method === 'GET' && url === '/about'){
        content = '<h1>About Mint</h1>'
    }

    response.setHeader('Content-Type', 'text/html; charset=UTF-8')
    response.statusCode = 200 //200 OK
    response.end(content) //แสดงข้อความบนหน้า
}) //สมรภูมิ

server.listen(APP_PORT, () => {
    console.log(`Server is start the war on Port ${APP_PORT}`)
}) //ผู้สังเกตการณ์ ส่งข้อมูลไปสมรภูมิ