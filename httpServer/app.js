import http from 'http' //IMPORTAÇAO DO MÓDULO HTTP, É RESPONSÁVEL POR RODAR SERVIDORES NA WEB

http.createServer((request,response)=>{ //MÉTODO CREATE SERVER RECEBE SEMPRE UMA FUNÇAO C 2 PARAMETROS: REQUEST E RESPONSE
    response.writeHead(200,{'Content-Type':'text/html'}); //EXEMPLIFICAÇAO DE ALGUNS MÉTODOS DO PARAMETRO RESPONSE:
    response.end("<h1>Hello World!</h1>");//ESSE MÉTODO EXIBIRA NA PÁGINA WEB O TIPO DE CONTEÚDO A SER INTERPRETADO PELO NAVEGADOR PELO MÉTODO ACIMA: NO CASO TEXT/HTML               
}).listen(3000,(err)=>{ //MÉTODO HTTP LISTEN: DETERMINA EM QUAL PORTA SERÁ ABERTO O SERVER E POSSUI UM CALLBACK ERROR
   if (err) {
    console.log(err);
   }else{
       console.log("servidor rodando na porta 3000");
   } 
})