module.exports = function(app)
{
	app.get('/',function(req, res){
		res.render('index.html',{title: "Strona główna", description: "description of page"});
	});
	app.get('/about', function(req,res){
		res.render('about.html');
	});
}