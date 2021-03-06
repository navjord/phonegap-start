/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    initialize: function() {
        this.bind();
    },
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
        // This is an event handler function, which means the scope is the event.
        // So, we must explicitly called `app.report()` instead of `this.report()`.
        app.report('deviceready');
//        settings.setDomStorageEnabled(true);
        if(window.plugins.childBrowser == null) {
            ChildBrowser.install();
        }
        app.testChildBrowser();
    },
    report: function(id) {
        // Report the event in the console
        console.log("Report: " + id);

        // Toggle the state from "pending" to "complete" for the reported ID.
        // Accomplished by adding .hide to the pending element and removing
        // .hide from the complete element.
        document.querySelector('#' + id + ' .pending').className += ' hide';
        var completeElem = document.querySelector('#' + id + ' .complete');
        completeElem.className = completeElem.className.split('hide').join('');
    },
    testChildBrowser: function(){
    	document.write('v35');
//    	var ref = window.open('http://apache.org', '_blank', 'location=yes');
//    	window.plugins.childBrowser.onLocationChange = function(url){
//    		$('#deviceready').append(url);
//    	};
//    	window.plugins.childBrowser.showWebPage("https://moterom2.uwap.org/appFile.html", { showLocationBar: true });
//    	window.plugins.childBrowser.showWebPage("http://writecodeonline.com/javascript/", { showLocationBar: true });
//    	window.plugins.childBrowser.showWebPage("http://www.google.com", { showLocationBar: true });
    	
    }
};
