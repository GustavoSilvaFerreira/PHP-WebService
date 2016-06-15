
function isEmail(email){
	if(email.indexOf('@')==-1 || email.indexOf('.')==-1 ){
		return false;
	}else{
		return true;
	}
}

function verificaEmail(){
	var novoCadastro=false;
	var nome = $('input[name="nome"]').val();
	var email = $('input[name="email"]').val();
	if(nome != "" && email != ""){
		if(!isEmail(email)){
			$('p.emailJaExiste').addClass("err");
			$('p.emailJaExiste').html("Digite um email válido.");
		}else{
			$.ajax({
    			type: 'GET',
        		dataType: "json",
        		cache: false,
        		contentType:"application/json",    
        		url: 'https://php-web-service-gustavoferreira.c9users.io/listarClientes',
    		}).done(function(e){
    			novoCadastro =true;
    			for(var i = 0; i<e.length; i++){
    				if(e[i].ds_Email == email){
    					$('p.emailJaExiste').html("Esse E-Mail já possui cadastro.");
    					$('p.emailJaExiste').removeClass("success");
    					$('p.emailJaExiste').addClass("err");
    					$('input[name="email"]').css("background-color","#FFC0CB");
    					novoCadastro = false;
    				}
    			}
    			if(novoCadastro == true){
					var model = {"nm_Cliente" : nome,"ds_Email" : email};
    				$.ajax({
    					type: 'POST',
    					dataType: "json",
    					cache: false,
    					contentType:"application/json",    
    					url: 'https://php-web-service-gustavoferreira.c9users.io/cliente',
    					data: JSON.stringify(model),
    				}).done(function(){
    					$('p.emailJaExiste').html("E-mail de confirmação enviado, verifique seu Email.");
    					$('p.emailJaExiste').addClass("success");
    					$('input.inpcadastrar').css("background-color","#FFF");
    					$('input.inpcadastrar').val("");
    				});
				}
    		});
		}
	}else{
		$('p.emailJaExiste').html("Por favor preencher os dois campos.");
    	$('p.emailJaExiste').addClass("err");
		$('input.inpcadastrar').css("background-color","#FFC0CB");
	}
	return novoCadastro;
}
