//import bodyParser from 'body-parser'//npm i body-parser | para leer el body de la api post

const express = require('express')
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.json())

app.get("/api",(req,res)=>{
    res.json({"users":["hola","desde","express"]})
})

app.post('/api/codePost',(req,res)=>{
    console.log(req.body)
    res.json({"message":"Form Submitted"})
})

app.listen(5000,()=>{console.log("Servidor abierto en puerto 5000"),console.log("At site http://localhost:5000/api")})
