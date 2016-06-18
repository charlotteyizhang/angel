/**
 * Created by user on 2016/6/18.
 */

$(function() {
	var primaryKey = "f1dac13344dc4195b84170d4e1e56b11";
	var bearer = null;
	var borrower = {};
//request token
	 $.ajax({
	        url: "https://cloudlevel.io/token",
	        beforeSend: function(xhrObj){
	            // Request headers
	            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key",primaryKey);
	        },
	        type: "GET"
	    })
    .done(function(data) {
    	//alert(data.bearer)
        var obj = data;
		$.ajax({
            url: "https://bluebank.azure-api.net/api/v0.6.3/customers?",
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", primaryKey);
                xhrObj.setRequestHeader("bearer", obj.bearer);
            },
            type: "GET",
            // Request body
            data: "{body}",
        })
        .done(function(data) {
            borrower = data[0];
        })
        .fail(function() {
            alert("error");
        });
	
    })
    .fail(function(xhr, status, error) {
      alert(xhr.responseText);
      return;
    });
});
// (function() {
// 	FACE_API_KEY = "";
// 	FACE_API_SECRET = "";
// 	PERSON_NAME = "";
// 	var basic_url = "https://apicn.faceplusplus.com/v2/";
// 	var data = {
// 		api_key: 
//  		api_secret:
//  		person_name:
//  	face_id
// 	}
// 	$.ajax({
// 		url: ""
// 	})
// 	})();
