const { response } = require("express");
const express = require("express"); //IMPORTAÇAO DO MÓDULO EXPRESS
const path = require("path"); // MÉTODO PARA BUILDAR PATHS

const app = express(); //INSTANCIA DO EXPRESS

app.use(express.static(path.join(__dirname, "client"))); //METODO STATIC= SERVIR ARQUIVOS STATIC PARA O SERVER(PRECISA DO PATH DO DIRETORIO) / PATH.JOIN = BUILDA O PATH AUTOMATICAMENTE SÓ PASSANDO O NOME DO DIRETÓRIO

app.get("/a",(request,response)=>{    //TRATAR REQUISIÇAO HTTP "GET" (MUITO MAIS SIMPLES)
                                     //PARAMETROS(ENDEREÇO A SER TRATADO,FUNÇAO REQUEST/RESPONSE)

    //response.set("Content-Type","text/plain")  PERMITE FAZER AS ALTERAÇOES NO HEADER QUE O  "SEND" ENVIA PARA O SERVER 
    //response.type("html")                      PERMITE FAZER ALTERAÇOES QUANTO AO TIPO DO TEXTO DO HEADER                              
    response.send("<h2>Hello World from GET</h2>"); //RETORNO PARA O SERVER
})

app.post("/",(request,response)=>{
        response.send("<h2>Hello World from POST</h2>");

})
app.put("/",(request,response)=>{
    response.send("<h2>Hello World from PUT</h2>");

})
app.delete("/",(request,response)=>{
    response.send("<h2>Hello World from DELETE</h2>");

})

 const PORT = 5000; // SETAR A PORTA (EVITAR HARDCODE)

app.listen(PORT, () => {
  //SETAR EM QUE PORTA O EXPRESS VAI "ESCUTAR" AS REQUISIÇOES HTTP EM DETERMINDADA PORTA
  console.log(`Server Running on port ${PORT}`);
});
