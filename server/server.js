const express = require('express')
const app = express()

app.get("/api",(req,res)=>{
    res.json({"users":["hola","desde","express"]})
})

app.listen(5000,()=>{console.log("Servidor abierto en puerto 5000"),console.log("At site http://localhost:5000/api")})
