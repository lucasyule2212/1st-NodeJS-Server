const express = require('express');
const bodyParser= require('body-parser');
var alunos = require("./routes/alunos")
var profs = require("./routes/professores")
var app = express();

app.use(bodyParser.urlencoded());

app.use("/api",alunos,profs);
app.get("/",(req,res)=>{     //ROTA NUMERO 1: ENDEREÇO="/" , APENAS MANDA "HELLO wORLD"
    res.send("Hello World")
})


app.listen(3000,()=>console.log("Server rodando na porta 3000"));