var main = {
	init: function(){
		this._registration();
		this._applogin();
	},
	_callAjax: function (url, type, content, data, datatype){
		console.log(data);
	     $.ajax({
	        url: url,
	        type: type,
	        content: content,
	        data: data,
	        dataType: datatype,
	        success: function(ans){
	        	var data = JSON.parse(ans);
	        	console.log(data)
	        }
	    }); 
	},
	_getformdata: function(element){
	    var unindexed_array = element.serializeArray();
	    var indexed_array = {};

	    $.map(unindexed_array, function(n, i){
	        indexed_array[n['name']] = n['value'];
	    });

	    return indexed_array;
	},
	_registration: function(){
		$('#register-form').submit(function(event) {
			event.preventDefault();
			main._callAjax(
				'http://139.162.130.192:9292/api/v1/users', 
				'POST',
				'application/json',
				main._getformdata($(this)),
				'json'
				);
		});
	},
	_applogin: function(){
		$('#login-form').submit(function(event) {
			
		});
	}
}

jQuery(document).ready(function($) {
	main.init();
});