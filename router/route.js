module.exports = function(app, http, bodyparser)
{var urlencodedParser = bodyparser.urlencoded({ extended: false })
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
	app.post('/login', urlencodedParser, function(req,res){
		console.log(req.body)
		var options = {
		  host: '139.162.130.192',
		  port: 9292,
		  path: '/oauth/token',
		  method: 'POST',
		  headers: {
		    'Content-Type': 'multipart/form-data'
		  }
		};

		var req2 = http.request(options, function(res2) {
		  console.log('STATUS: ' + res2.statusCode);
		  console.log('HEADERS: ' + JSON.stringify(res2.headers));
		  res2.setEncoding('utf8');
		  res2.on('data', function (chunk) {
		    console.log('BODY: ' + chunk);
		  });
		});
		req2.on('error', function(e){console.log(e.message);})
		req2.write("username=maro.barto@gmail.com&password=qwer1234&grand_type=password")
		req2.end();
		res.redirect('/login');
	});
}