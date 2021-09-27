const http=require('http')

const server=http.createServer((request,response)=>{
let url=request.url
let method=request.method

if(url==='/'){
    response.writeHead(200,{
        "Content-type":'text/html'
    })
    response.write('<h1>hebewv</h1>')
    response.end()
}


})

server.listen(8080)