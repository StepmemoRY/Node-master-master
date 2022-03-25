const http = require('http')
const fs = require("fs")
const path = require("path")

/*
const server = http.createServer((req,res) => {

    res.writeHead(200,{'Content-Type':'text/plain'})

    const readStream = fs.createReadStream(path.join(__dirname,"data","testdata.txt"),'utf-8')
    readStream.pipe(res)


})

server.listen(3001, () => console.log(`stream run port ${3001}`))
*/

const server = http.createServer((req,res) => {
if (req.url === '/index', req.url === '/') {
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})
    const readStream = fs.createReadStream(path.join(__dirname,"html","index.html"))
    readStream.pipe(res)
}

else if(req.url === '/about') {
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})
    const readStream = fs.createReadStream(path.join(__dirname,"html","about.html"))
    readStream.pipe(res)
}


})

server.listen(3002, () => console.log(`stream run port ${3002}`))

