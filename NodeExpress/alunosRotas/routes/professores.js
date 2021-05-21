const express = require('express');

const router = express.Router();

let profs =[               //ARRAY DE profs PARA EXEMPLIFICAR AS ROTAS
    {id:0,nome:"Sitaro"},
    {id:1,nome:"Eduardo"},
    {id:2,nome:"Rogerio"},
    {id:3,nome:"Marcilio"}
]

router.get("/profs",(req,res,next)=>{  //ROTA NUMERO 2: ENDEREÇO="/profs", O REQUEST PROCURA POR prof NO "BODY", SE NAO ACHAR VAI PRA PROXIMA ROTA
    console.log(req.body);
    let prof = profs[req.body.id];
    if (prof) {
        res.json(prof);            //SE ACHAR, O RESPONSE GERA UM JSON COM OS DADOS DO prof
    }else{
        next();
    }
})

router.get("/profs",(req,res,next)=>{ //ROTA NUMERO 3: ENDEREÇO="/profs", O REQUEST PROCURA POR UM prof NO "QUERY"(?id=x isso vai no endereço, após /prof)
    console.log(req.query);
    let prof = profs[req.query.id];
    if (prof) {
        res.json(prof);           //SE ACHAR, O RESPONSE GERA UM JSON COM OS DADOS DO prof
    }else{
        res.send("Professor nao encontrado!")   //SE NAO ACHAR, O RESPONSE MANDA UMA MENSAGEM DE prof NAO ENCONTRADO
    }
})

router.get("/profs/all",(req,res)=>{  //ROTA NUMERO 4: ENDEREÇO="/profs/ALL", O RESPONSE GERA UM JSON COM TODO O ARRAY DE profs
    res.json(JSON.stringify(profs));
})

router.get("/profs/:id",(req,res)=>{ //ROTA NUMERO 5: ENDEREÇO="/profs/:ID"
    console.log(req.params.id);
    let prof = profs[req.params.id]
    res.json(prof);
})

module.exports = router;