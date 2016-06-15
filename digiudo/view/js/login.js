			$('#Blogar').click(function(){
		        var model={"login":$("#loginUser").val(),"senha":$("#passwordUser").val()}   
		        $.ajax({
		            type: 'POST',
		            dataType: "json",
		            cache: false,
		            contentType:"application/json",    
		            url: 'https://php-web-service-gustavoferreira.c9users.io/digiudo/auth',
		            data: JSON.stringify(model),
		            success: function(e){
		            	if(e){
		            		window.location = "painel";
		            	}else{
		            		//window.location = "vender";
		            		$("#loginUser").addClass('err');
		            		$("#passwordUser").addClass('err');
		            	}
		            }
		        });
    		})