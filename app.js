var express    =    require('express');
var app        =    express();
var nunjucks   =    require('nunjucks');
var bodyparser = 	require('body-parser');
var http 	   = 	require('http');
var querystring =   require('querystring');



app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({ extended: false }));

require('./router/route')(app, http, bodyparser, querystring);

nunjucks.configure('views', {
    autoescape: true,
    express: app
});
app.engine( 'html', nunjucks.render ) ;
app.set( 'view engine', 'html' ) ;


var server     =    app.listen(3000,function(){
    console.log("Serwer nasłuchuje na porcie 3000");
});