module.exports = function(app)
{
	app.get('/',function(req, res){
		res.render('index.html');
	});
	app.get('/home',function(req, res){
		res.render('home.html');
	});
	app.get('/login', function(req,res){
		res.render('user/login.html');
	});
	app.get('/register', function(req,res){
		res.render('user/register.html');
	});
}