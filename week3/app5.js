var express = require('express');
var http = require('http');

var app = express(); // express 객체

app.set('port', process.env.PORT || 3000);

app.use(function(req,res,next){
    console.log('첫번째 미들웨어 호출됨');

    //res.redirect('http://google.co.kr');
    var userAgent = req.header('User-Agent');
    var paramName = req.query.name;

    res.send('<h3>서버에서 응답 : User-Agent ->' + userAgent+'</h3>'+
    '<h3>ParamName->' + paramName+'</h3>');
});



var server = http.createServer(app).listen(app.get('port'),function(){
    console.log('익스프레스로 웹 서버를 실행함 : ' + app.get('port'));
});
