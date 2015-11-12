var main = {
	init: function(){
		
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
	}
}

jQuery(document).ready(function($) {
	main.init();
});