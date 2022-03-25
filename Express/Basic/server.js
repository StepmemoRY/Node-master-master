const express = require("express")
PORT = 3001
const app = express()

/*
app.get("/",(req, res) =>{

    res.send("Hello-merhaba")

    
})
*/
/*
app.get("/users",(req, res) =>{

    res.sendFile('./views/index.html',{root:__dirname})

    
})
*/

// app.get("/users/:id",(req, res) =>{

//     res.status(200).send(`<h1>Users ID ${req.params.id}</h1>`)
    
    
// })
app.use(express.json())

 const lessons = [
     {id:1, name:'Fizik'},
     {id:2, name: 'Kimya'},
     {id:3, name: 'Matematik'}
 ]

 app.get("/api/lessons",(req, res) =>{

    res.send(lessons)

    
})

app.post('/api/lessons',(req,res) =>{
    const lesson = {
        id: lessons.length +1,
        name: req.body.name
    }

    lessons.push(lesson)
    res.send(lesson)
})
app.listen(PORT,() => console.log(`Server Running ${PORT}`))





