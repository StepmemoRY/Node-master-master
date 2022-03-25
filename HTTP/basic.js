const  http = require("http")
const PORT = 3001;

const server = http.createServer((req,res) => {

   // const url = req.url;
    //res.end(url)

    res.statusCode = 200
   // res.setHeader('Content-type','text/plain')
   //res.end('Helloooo')

    //res.setHeader('Content-type','text/html')
    //res.end('<h1>Helloooo<h1>')

    //res.setHeader('Content-Type','application/json')
    //res.end(JSON.stringify([{id:1, name:'BIL425'}]))

    //res.writeHead(200 , {'content-Type': 'text/plain'})
    //res.end('Helloooo')

})

server.listen(PORT,() => {
    console.log(`server running ${PORT}`)
})