const http = require('http')
const path = require('path')
const fs = require('fs')
const url = require('url')
const { text } = require('stream/consumers')


let server = http.createServer((request,response) => {
response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

    
    console.log(request.method)
    console.log(request.url)
    let a = url.parse(request.url,true).query.otzyv
    console.log(a)




    if(a ===''){
        response.end('Заполните поля,иначе ваш запрос не будет принят')
    }else{



    
    fs.appendFile(path.resolve(__dirname, 'text.txt'), a + '\n'  ,(err) => {
        console.log('Файл создан')
        response.end("Ваша идея принята,спасибо за отзыв")
    
    
    })

}



}  ).listen(5000)

  
