/**
 * Created by user on 2016/6/18.
 */

$(function() {
	var primaryKey = "f1dac13344dc4195b84170d4e1e56b11";
	var bearer = null;
	var borrower = {};
//request token
	 // $.ajax({
	 //        url: "https://cloudlevel.io/token",
	 //        beforeSend: function(xhrObj){
	 //            // Request headers
	 //            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key",primaryKey);
	 //        },
	 //        type: "GET"
	 //    })
  //   .done(function(data) {
  //   	//alert(data.bearer)
  //       var obj = data;
		// $.ajax({
  //           url: "https://bluebank.azure-api.net/api/v0.6.3/customers?",
  //           beforeSend: function(xhrObj){
  //               // Request headers
  //               xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", primaryKey);
  //               xhrObj.setRequestHeader("bearer", obj.bearer);
  //           },
  //           type: "GET",
  //           // Request body
  //           data: "{body}",
  //       })
  //       .done(function(data) {
  //           borrower = data[0];
  //       })
  //       .fail(function() {
  //           alert("error");
  //       });
	
  //   })
  //   .fail(function(xhr, status, error) {
  //     alert(xhr.responseText);
  //     return;
  //   });
    
    //----------------------------------------------------
    $("#usernameBtn").click(function(){
        var formData = $('#username_form').serializeArray();
        if(formData!=null && formData[0].value == "ShiHuiTan"){
            // window.location.href="2.html";
            $("#username_form").addClass("hidden");
            $("#facecheckin_form").removeClass("hidden");
        }else{
            $("#warntext").html("Username is not in the database!");
        }
    })

    $("#facecheckin_form").submit(function (event) {
        $("#warntext").addClass("hidden");
        $("#loading").removeClass("hidden");

        $.ajax({
            url: 'upload.php',
            type: 'POST',
            data: new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and values)

            contentType: false,       // The content type used when sending data to the server.
            cache: false,             // To unable request pages to be cached
            processData:false,        // To send DOMDocument or non processed data file it is set to false
            success: function (data) {
                
                //if imge is successfully uploaded 
                
                var detect_url = "https://apius.faceplusplus.com/v2/detection/detect?url="+data+"&api_secret=UI3TXmiUf3wk1PvIh92uTGTSbxmvnRyr&api_key=41358f1d9ebc20273f2471a5a84c8777&attribute=glass,pose,gender,age,race,smiling";

                $.ajax({
                    url : detect_url,
                    success: function(data) {
                        // alert(data);
                        var face_id = data.face[0].face_id;
                        var verify_url = "https://apius.faceplusplus.com/v2/recognition/verify?api_secret=UI3TXmiUf3wk1PvIh92uTGTSbxmvnRyr&face_id="+face_id+"&api_key=41358f1d9ebc20273f2471a5a84c8777&person_name=ShiHuiTan";
                        $.ajax({
                            url : verify_url,
                            success: function(data){
                                var result = data.is_same_person;
                                if(result ){
                                    window.location.href = "2.html";
                                }else{
                                     $("#warntext").removeClass("hidden");
                                    $("#warntext").html("ATTENTION: Face invalid!!!!");
                                    $("#loading").addClass("hidden");
                                }
                            }
                        });

                    },
                    error: function(){
                        alert("error in face detect");
                    }
                });
            },
            error: function(){
                alert("error in ajax form submission");
            }
        });

        return false;
    });
    
});
function sendMail(address, Msg){
        $.post('php/mail.php', {mail: address, comment: Msg}, function(data) {
            // window.location.href="6.html";
        });
    }
