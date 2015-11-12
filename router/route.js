module.exports = function(app, http, querystring)
{
	

	app.get('/',function(req, res){
		res.render('index.html');
	});
	app.get('/sports',function(req, res){
		res.render('sporty.html');
	});
	app.get('/events',function(req, res){
		res.render('evets.html');
	});
	app.get('/login', function(req,res){
		res.render('user/login.html');
	});
	app.get('/register', function(req,res){
		res.render('user/register.html');
	});

	app.post('/login', function(req,res){

		var data = JSON.stringify({
			"username":"maro.barto@gmail.com",
			"password":"qwer1234",
			"grant_type":"password"
		});
		console.log(data)
		var options = {
		      hostname: '139.162.130.192',
		      port: 9292,
		      path: '/oauth/token',
		      method: 'POST',
		      headers: {
		      	'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.62 Safari/537.36',
		              'Content-Type': 'application/json'
		          }
		        };

		var req = http.request(options, function(res) {
		  console.log('Status: ' + res.statusCode);
		  console.log('Headers: ' + JSON.stringify(res.headers));
		  res.setEncoding('utf8');
		  res.on('data', function (body) {
		        console.log(body);
		  });
		});
		req.on('error', function(e) {
		  console.log('problem with request: ' + e.message);
		});
		req.writeHead('200');
		req.write('{"username":"maro.barto@gmail.com","password":"qwer1234","grant_type":"password"}');
		req.end();
		

	});
}
