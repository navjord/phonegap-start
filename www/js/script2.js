define(function(require, exports, module) {

	var 
		$ = require('jquery'),
		UWAP = require('uwap-core/js/core')
    	;

	require('uwap-core/bootstrap/js/bootstrap');	
	
	require('uwap-core/bootstrap/js/bootstrap-modal');
	require('uwap-core/bootstrap/js/bootstrap-collapse');
	require('uwap-core/bootstrap/js/bootstrap-button');
	require('uwap-core/bootstrap/js/bootstrap-dropdown');
	
	UWAP.utils.jso_configure({
		"uwap": {
			client_id: "app_moterom",
			authorization: UWAP.utils.getEngineURL('/api/oauth/authorization'),
			redirect_uri: "https://moterom.uwap.org/_/passiveResponse"
		}
	});



	var runapp = function() {


		function loggedin(user) {
			$("div#main").empty().prepend('<p>Logged in as <strong>' + user.name + '</strong> (<tt>' + user.userid + '</tt>)</p>');
			var gr = $('<dl></dl>')
			if(user.groups) {
				groups = user.groups;
				for(var key in user.groups) {
					gr.append('<dt>' + user.groups[key] + '</dt>');
					gr.append('<dd><tt>' + key + '</tt></dd>');
				}
			}
			$("div#main").append('<p>Groups:</p>').append(gr);
		}
		UWAP.auth.require(loggedin);

	}

	document.addEventListener("deviceready", runapp, false);

});
