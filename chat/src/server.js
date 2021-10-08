const express=require('express')
const CookieParser=require('cookie-parser')
const LoginRoute=require('./routes/LoginRoutes')
const path=require('path')

const {PORT}=require('./config')

const server=express()

server.listen(PORT, _=> console.log('ready'))

server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use(CookieParser())
server.use(express.static(path.join(__dirname,'public')))

server.set('view engine','ejs')
server.set('views',path.join(__dirname,'views'))

server.use(LoginRoute.path,LoginRoute.router)