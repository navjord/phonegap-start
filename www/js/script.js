define(function(require, exports, module) {
	
	
//	console.log('requireLog');
//	alert('requireAlert');
	
//	$.getScript("phonegap.js", function(data, textStatus, jqxhr) {
//		   console.log(data); //data returned
//		   console.log(textStatus); //success
//		   console.log(jqxhr.status); //200
//		   console.log('Load was performed.');
//		   alert('load performed');
//		   $.getScript("childbrowser.js", function(data, textStatus, jqxhr) {
//			   console.log(data); //data returned
//			   console.log(textStatus); //success
//			   console.log(jqxhr.status); //200
//			   console.log('Load was performed.');
//			   alert(window.plugins);
//			   
//			   
//		   });
//		});
	
//	require('phonegap');
//	require('childbrowser');
	
	
//			loadJS('phonegap.js');
//		loadJS('childbrowser.js');
//	function loadJS(fileName){
//		var fileref=document.createElement('script');
//		fileref.setAttribute("type","text/javascript");
//		fileref.setAttribute("src", filename);
//		document.getElementsByTagName("head")[0].appendChild(fileref)
//	}
	
	
//	document.addEventListener('deviceready', deviceReady, false);
//
//	document.addEventListener('deviceready', function(){alert('deviceready');}, false);
//	deviceready();
	
	
	
		console.log('new test');
		var $ = require('jquery'), UWAP = require('uwap-core/js/core'), moment = require('uwap-core/js/moment'),
		// moment = require('moment')
		hogan = require('uwap-core/js/hogan'), prettydate = require('uwap-core/js/pretty');

		require('lib/jquery.equalheights');
		require("lib/director");

		var MRController = require('controllers/MRController');
		var Event = require('models/Event');
		var Room = require('models/Room');

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

//		if (typeof window.console == "undefined") {
//			window.console = {
//				log : function() {
//				}
//			};
//		}

		/*
		 * JavaScript Pretty Date Copyright (c) 2011 John Resig (ejohn.org)
		 * Licensed under the MIT and GPL licenses.
		 */

		// Takes an ISO time and returns a string representing how
		// long ago the date represents.
		function prettyDate(time) {
			var date = new Date(time), diff = (((new Date()).getTime() - date
					.getTime()) / 1000), day_diff = Math.floor(diff / 86400);

			if (isNaN(day_diff) || day_diff < 0)
				return;

			return day_diff == 0
					&& (diff < 60 && "just now" || diff < 120 && "1 minute ago"
							|| diff < 3600 && Math.floor(diff / 60)
							+ " minutes ago" || diff < 7200 && "1 hour ago" || diff < 86400
							&& Math.floor(diff / 3600) + " hours ago")
					|| day_diff == 1 && "Yesterday" || day_diff < 7 && day_diff
					+ " days ago" || day_diff < 31 && Math.ceil(day_diff / 7)
					+ " weeks ago";
		}

		function prettyInterval(diff) {

			var day_diff = Math.floor(diff / 86400);

			if (isNaN(day_diff) || day_diff < 0)
				return;

			return day_diff == 0
					&& (diff < 60
							&& "under ett minutt"
							|| diff < 120
							&& "ett minutt"
							|| diff < 3600
							&& Math.floor(diff / 60)
							+ " minutter"
							|| diff < 7200
							&& "en time "
							+ Math
									.floor((diff - 3600 * Math
											.floor(diff / 3600)) / 60)
							+ ' minutter ' || diff < 86400
							&& Math.floor(diff / 3600)
							+ " timer "
							+ Math
									.floor((diff - 3600 * Math
											.floor(diff / 3600)) / 60)
							+ ' minutter ') || day_diff == 1 && "en dag"
					|| day_diff < 7 && day_diff + " dager" || day_diff < 31
					&& Math.ceil(day_diff / 7) + " uker";
		}

		moment.fn.hdur = function() {
			var udur = Math.abs(moment().unix() - this.unix());
			return prettyInterval(udur);
		}
		moment.lang('en');

	
	
	
	$(document).ready(function() {
		alert('doc ready');
		checkPG();

		function checkPG() {
			if (!window.plugins) {
				alert('not window.plugins');
				console.log('not window.plugins');
				setTimeout(checkPG, 200);
			} else {
				alert('moving on');
				moveOn();
			}
		}	
		
		function moveOn(){
//			if(!jso_registerRedirectHandler){
//				alert('no jso_registerRedirectHandler');
//			}
//			jso_registerRedirectHandler(window.plugins.childBrowser.showWebPage);
			var m = new MRController($("div#main"));

				var groupHandler = function(room) {
					m.mainRoom = room;
				};
				var deviceHandler = function(device) {
					console.log(device);
				};
				var devicesHandler = function() {

				};

				var routes = {
					'/room/:id' : groupHandler,
					'/device/:id' : deviceHandler,
					'/devices' : devicesHandler
				};

				var router = Router(routes);
				router.init();
		}
		});
});
