var main = {
	init: function(){
		this._userMenu();
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
	_userMenu: function(){
		$('#user-profile-img').click(function(event) {
			if($('#notifications-menu').is(':visible')){
				$('#notifications-menu').hide();
			}
			$('#user-menu').toggle();
		});
		$('#notifications-img').click(function(event) {
			if($('#user-menu').is(':visible')){
				$('#user-menu').hide();
			}
			$('#notifications-menu').toggle();
		});
	}
}

jQuery(document).ready(function($) {
	main.init();
});