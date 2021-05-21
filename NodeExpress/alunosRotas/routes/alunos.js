const express = require('express');

const router = express.Router();

let alunos =[               //ARRAY DE ALUNOS PARA EXEMPLIFICAR AS ROTAS
    {id:0,nome:"Lucas"},
    {id:1,nome:"Denya"},
    {id:2,nome:"Chico"},
    {id:3,nome:"Luna"}
]

router.get("/aluno",(req,res,next)=>{  //ROTA NUMERO 2: ENDEREÇO="/ALUNO", O REQUEST PROCURA POR ALUNO NO "BODY", SE NAO ACHAR VAI PRA PROXIMA ROTA
    console.log(req.body);
    let aluno = alunos[req.body.id];
    if (aluno) {
        res.json(aluno);            //SE ACHAR, O RESPONSE GERA UM JSON COM OS DADOS DO ALUNO
    }else{
        next();
    }
})

router.get("/aluno",(req,res,next)=>{ //ROTA NUMERO 3: ENDEREÇO="/ALUNO", O REQUEST PROCURA POR UM ALUNO NO "QUERY"(?id=x isso vai no endereço, após /aluno)
    console.log(req.query);
    let aluno = alunos[req.query.id];
    if (aluno) {
        res.json(aluno);           //SE ACHAR, O RESPONSE GERA UM JSON COM OS DADOS DO ALUNO
    }else{
        res.send("Aluno nao encontrado!")   //SE NAO ACHAR, O RESPONSE MANDA UMA MENSAGEM DE ALUNO NAO ENCONTRADO
    }
})

router.get("/aluno/all",(req,res)=>{  //ROTA NUMERO 4: ENDEREÇO="/ALUNO/ALL", O RESPONSE GERA UM JSON COM TODO O ARRAY DE ALUNOS
    res.json(JSON.stringify(alunos));
})

router.get("/aluno/:id",(req,res)=>{ //ROTA NUMERO 5: ENDEREÇO="/ALUNO/:ID"
    console.log(req.params.id);
    let aluno = alunos[req.params.id]
    res.json(aluno);
})

module.exports = router;