var main = {
	init: function(){
		this._registration();
		this._applogin();
	},
	_callAjax: function (url, type, data){
	     $.ajax({
	        url: url,
	        type: type,
	        content: 'application/json',
	        data: data,
	        dataType: 'json',
	        success: function(json){
	        	console.log(json)
	        }
	    }); 
	},
	_registration: function(){
		$('#register-form').submit(function(event) {
			event.preventDefault();
			main._callAjax(
				'http://139.162.130.192:9292/api/v1/users', 
				'POST', 
				$(this).serialize()
				);
		});
	},
	_applogin: function(){
		$('#login-form').submit(function(event) {
			event.preventDefault();
			main._callAjax(
				'http://139.162.130.192:9292/oauth/token',
				'POST',
				$(this).serialize() + '&grant_type=password'
				);
		});
	}
}

jQuery(document).ready(function($) {
	main.init();
});