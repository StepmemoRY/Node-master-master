const express = require("express")
app = express()
PORT = 3002

const auth = require("./middle/auth")
const logger = require("./middle/logger")

//app.use(auth)

// app.use((req,res,next)=>{
//     console.log("middleware")
//     //res.send("middleware")
//     next()
// })

// app.use ((req,res) =>{
//     logger(`${req.method}\t${req.url}`,`log.txt`)
//     next()
// })

// app.use(express.static("public"))

// app.use(express.urlencoded({extended:false}))
// app.use(express.json())

// app.get('/',auth ,(req,res)=>{
//     res.send("page is rendering")
// })

// app.get('/users',
// (req,res) =>{
//     logger(`${req.method}\t${req.url}`,`log.txt`)
//     next()
// },
// (req,res)=>{
//     res.send("users is rendering")
// })

//CORS

    const cors = require("cors")

    app.use(cors())
    

        app.get('/',(req,res)=>{
        res.send("CORS samples")
 }) 

















app.listen(PORT,() => console.log(`${PORT} Portunda Çalıştı`))