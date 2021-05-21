import http from 'http' //IMPORTAÇAO DO MÓDULO HTTP, É RESPONSÁVEL POR RODAR SERVIDORES NA WEB
import url from 'url'   //CRIANDO UMA URL
import fs from 'fs'



http.createServer((request,response)=>{ //MÉTODO CREATE SERVER RECEBE SEMPRE UMA FUNÇAO C 2 PARAMETROS: REQUEST E RESPONSE

 let pathName= url.parse(request.url).pathname;
 if (pathName==" "||pathName=="/") {
     pathName="/index.html"
 }
 let fileName = "." + pathName;

 fs.readFile(fileName,(err,data)=>{
     if (err) {
        response.writeHead(404,{'Content-Type':'text/html;charset=utf8'});
        response.end("<h1>Página nao encontrada =/ </h1>");

     }else{
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write(data);
        response.end();
     }
 })  

    response.end();

}).listen(3000,(err)=>{ //MÉTODO HTTP LISTEN: DETERMINA EM QUAL PORTA SERÁ ABERTO O SERVER E POSSUI UM CALLBACK ERROR
   if (err) {
    console.log(err);
   }else{
       console.log("servidor rodando na porta 3000");
   } 
})