var express    =    require('express');
var app        =    express();
var nunjucks   =    require('nunjucks');


require('./router/route')(app);
app.use(express.static(__dirname + '/public'));

nunjucks.configure('views', {
    autoescape: true,
    express: app
});
app.engine( 'html', nunjucks.render ) ;
app.set( 'view engine', 'html' ) ;


var server     =    app.listen(3000,function(){
    console.log("Serwer nasłuchuje na porcie 3000");
});