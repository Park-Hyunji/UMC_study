var express = require('express');
var http = require('http');

var app = express(); // express 객체

app.set('port', process.env.PORT || 3000);

app.use(function(req,res,next){
    console.log('첫번째 미들웨어 호출됨');
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.end('<h1>서버에서 응답한 결과입니다</h1>');
});



var server = http.createServer(app).listen(app.get('port'),function(){
    console.log('익스프레스로 웹 서버를 실행함 : ' + app.get('port'));
});
