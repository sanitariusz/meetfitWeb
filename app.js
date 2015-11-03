var express    =    require('express');
var app        =    express();

require('./router/route')(app);
app.use(express.static(__dirname + '/public'));
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server     =    app.listen(3000,function(){
    console.log("Serwer nasłuchuje na porcie 3000");
});