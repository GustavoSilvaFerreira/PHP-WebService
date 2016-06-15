// JavaScript Document
$(document).ready(function(e) {
    $("#videob").click(function(){
    	$("#videob").attr("src","https://php-web-service-gustavoferreira.c9users.io/digiudo/view/videos/Digiúdo.mp4");
		$("#videob").trigger("play");
		$("#videoa").trigger("pause");
	})
});

