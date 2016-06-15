var modeledt = {};

var img;

$('input[name="nome"]').keyup(function(){
        $(".dest").html($(this).val());
});

$('#tipo').click(function(){
    
    var tp = $(this).val();
            $(".tvideo").html(function(){
                if(tp=='1'){
                    return "Video";
                }else{
                    if(tp=='2'){
                        return "Áudio";
                        
                    }else{
                        return "eBook";
                    }
                }
            });
});


$('input[name="valor"]').keyup(function(){
    $("div.anuncio > p > span").html($(this).val());
});

     
$('#formId').submit( function( e ) {
    $.ajax( {
        url: 'https://php-web-service-gustavoferreira.c9users.io/up',
        type: 'POST',
        data: new FormData( this ),
        processData: false,
        contentType: false
    });
        e.preventDefault();
});


function confirmar(){
    if($('input[name="nome"]').val()==""){
        $('input[name="nome"]').css("border-color","#F00");
        $('input[name="nome"]').css("background-color","#FA8072");
    }else{
        
        var model = {"user": parseInt(window.sessionStorage.getItem('id')),"nome" : $('input[name="nome"]').val(),"valor" : parseFloat($('input[name="valor"]').val()), "capa" :img, "tipo" : parseInt($('select[name="tipo"]').val()), "descricao" : $('textarea[name="descricao"]').val()};
        
        
        $('#formId').submit();
        
   
        $.ajax({
            type: 'POST',
            dataType: "json",
            cache: false,
            contentType:"application/json",    
            url: 'https://php-web-service-gustavoferreira.c9users.io/produto',
            data: JSON.stringify(model),  
        }).done(function(e){
            var itens = "";
            itens+="<tr><td>";
            itens+="<span id='cd'>"
            itens+=e.id;
            itens+="</span>"
            itens+="</td><td class='nomeprod'>";
            itens+="<span id='nm'>"
            itens+=e.nome;
            itens+="</span>"
            itens+="</td><td>";
            itens+="<span id='vl'>"
            itens+=e.valor;
            itens+="</span>"
            itens+="</td><td>";
            itens+="<button onclick='excluir("+e.id+")' class='boton1'>Excluir</button>";
            itens+="</td>";
            itens+="<td style='position: absolute; top: 22%; left: 80000000%'>";
            itens+="<span id='im' style='text-indent:-1000000px'>"
            itens+=e.capa;
            itens+="</span>"
            itens+="<span id='tp' style='text-indent:-1000000px'>"
            itens+=e.tipo;
            itens+="</span>"
            itens+="<span id='des' style='text-indent:-1000000px'>"
            itens+=e.descricao;
            itens+="</span>"
            itens+="</td>";
            itens+="</tr>";
            $("#t1 tbody").append(itens);
            selecao();
        });
        ajuste();
        $('tbody tr').css('background-color','#fff');  
        img = undefined;
    }
}

function confedit(){
    $('#formId').submit();
    modeledt.nome = $('input[name="nome"]').val();
    modeledt.valor =  $('input[name="valor"]').val();
    modeledt.tipo =  $('select[name="tipo"]').val();
    modeledt.descricao =  $('textarea[name="descricao"]').val();
    if(img!=undefined){
        modeledt.capa =  img;   
    }
    
    //alert(modeledt.id);
    if($('input[name="nome"]').val()==""){
        $('input[name="nome"]').css("border-color","#F00");
        $('input[name="nome"]').css("background-color","#FA8072");
    }else{
        $.ajax({
            type: "PUT",
            dataType: "json",
            cache: false,
            contentType:"application/json",    
            url: 'https://php-web-service-gustavoferreira.c9users.io/alterarProduto/'+modeledt.id,
            data: JSON.stringify(modeledt),  
        }).done(function(e){
           $('tr[select="select"]').find('span[id="nm"]').html(e.nome);
           $('tr[select="select"]').find('span[id="vl"]').html(e.valor);
           $('tr[select="select"]').find('span[id="des"]').html(e.descricao);
           $('tr[select="select"]').find('span[id="tp"]').html(e.tipo);
           $('tr[select="select"]').find('span[id="im"]').html(e.capa);
           selecao();
        });
        ajusteEdit();
        img = undefined;
    }
}

function novo(){
    $('#btn-conc').addClass('corVerde');
    $('#btn-canc').addClass('corVermelha');
    $('tbody tr').off("click")
    $('input[name="nome"]').val("");
    $('input[name="valor"]').val("");
    $('select[name="tipo"]').val("");
    $('textarea[name="descricao"]').val(""); 
    $('#btn-alt').removeAttr("onclick");
    $('#btn-nv').removeAttr("onclick");
    $('input[name="nome"]').css("background-color","#fff");
    $('input[name="valor"]').css("background-color","#fff");
    $('input[name="nome"]').removeAttr("disabled","disabled");
    $('input[name="valor"]').removeAttr("disabled","disabled");
    $('#fileupload').removeAttr("disabled","disabled");
    $('select[name="tipo"]').removeAttr("disabled","disabled");
    $('textarea[name="descricao"]').removeAttr("disabled","disabled");
    $('#btn-conc').attr("onclick","confirmar()");
    $('#btn-canc').attr("onclick","cancelar()");
    $('#btn-canc').removeAttr("disabled",'disabled');
    $('#btn-conc').removeAttr("disabled",'disabled');
    $('#btn-alt').attr("disabled",'disabled');
    $('#btn-conc').removeClass('block');
    $('#btn-canc').removeClass('block');
}

function cancelar(){
    selecao();
    $('tbody tr').css('background-color','#fff');   
    ajuste();
}

function cancelarEdit(){
    selecao();
    $('input[name="nome"]').val($('tr[select="select"]').find('span[id="nm"]').html());
    $('input[name="valor"]').val($('tr[select="select"]').find('span[id="vl"]').html());
    $('select[name="tipo"]').val($('tr[select="select"]').find('span[id="tp"]').html());
    $('textarea[name="descricao"]').val($('tr[select="select"]').find('span[id="des"]').html());
    $(".dest").html($(this).find('span[id="nm"]').html());
    $(".tvideo").html($(this).find('span[id="tp"]').html());
    $("div.anuncio > p > span").html($(this).find('span[id="vl"]').html());
    ajusteEdit();
}

function alterar(){
    $('tbody tr').off("click");
    $('#btn-nv').addClass('block');
    $('#btn-nv').removeAttr("onclick");
    $('#btn-nv').attr("disabled",'disabled');
    $('input[name="nome"]').css("background-color","#fff");
    $('input[name="valor"]').css("background-color","#fff");
    $('input[name="nome"]').removeAttr("disabled","disabled");
    $('input[name="valor"]').removeAttr("disabled","disabled");
    $('#fileupload').removeAttr("disabled","disabled");
    $('select[name="tipo"]').removeAttr("disabled","disabled");
    $('textarea[name="descricao"]').removeAttr("disabled","disabled");
    $('#btn-conc').attr("onclick","confedit()");
    $('#btn-canc').attr("onclick","cancelarEdit()");
    $('#btn-conc').removeClass('block');
    $('#btn-canc').removeClass('block');
    $('#btn-conc').addClass('corVerde');
    $('#btn-canc').addClass('corVermelha');
    $('#btn-conc').removeAttr("disabled",'disabled');
    $('#btn-canc').removeAttr("disabled",'disabled');
}

function listar(){
    ajuste();
    var itens = "";
    
    $.ajax({
        type: 'GET',
        dataType: "json",
        cache: false,
        contentType:"application/json",    
        url: 'https://php-web-service-gustavoferreira.c9users.io/listaProduto/'+ window.sessionStorage.getItem('id'),
    }).done(function(e){
        if(e!=null){
            for(var i = 0; i<e.length; i++){
                itens+="<tr><td>";
                itens+="<span id='cd'>"
                itens+=e[i].id;
                itens+="</span>"
                itens+="</td><td class='nomeprod'>";
                itens+="<span id='nm'>"
                itens+=e[i].nome;
                itens+="</span>"
                itens+="</td><td>";
                itens+="<span id='vl'>"
                itens+=e[i].valor;
                itens+="</span>"
                itens+="</td><td>";
                itens+="<button onclick='excluir("+e[i].id+")' class='boton1'>Excluir</button>";
                itens+="</td>";
                itens+="<td style='position: absolute; top: 22%; left: 80000000%'>";
                itens+="<span id='im' style='text-indent:-1000000px'>"
                itens+=e[i].capa;
                itens+="</span>"
                itens+="<span id='tp' style='text-indent:-1000000px'>"
                itens+=e[i].tipo;
                itens+="</span>"
                itens+="<span id='des' style='text-indent:-1000000px'>"
                itens+=e[i].descricao;
                itens+="</span>"
                itens+="</td>";
                itens+="</tr>";
            }
            $("#t1 tbody").html(itens);
            selecao();
        }
    });
}

function excluir(x){
    //var model = {"id" : x};
     if(confirm("Confirma a exclusão do usuário "+$('button[onclick="excluir('+x+')"').parent().parent().find('span[id="nm"]').html()+"?")){
        $.ajax({
        type: 'DELETE',
        dataType: "json",
        cache: false,
        contentType:"application/json",    
        url: 'https://php-web-service-gustavoferreira.c9users.io/deletarProduto/'+x,
        //data: JSON.stringify(model),
        });
        $("#t1 tbody").html("");
        listar();
    }
}

function selecao(){
    $('tbody tr').css('cursor','pointer');
        $('tbody tr').click(function(){
            $('#btn-alt').removeClass('block');
            $('#btn-alt').removeAttr("disabled",'disabled');
            $('#btn-alt').attr("onclick","alterar()");
            $('tbody tr').css('background-color','#fff');
            $('tbody tr').removeAttr('select','select');
            $(this).css('background-color','#76affd');
            $(this).attr('select','select');
            //alert($(this).html());
            $('input[name="nome"]').val($(this).find('span[id="nm"]').html());
            $('input[name="valor"]').val($(this).find('span[id="vl"]').html());
            //$('#fileupload').html($(this).find('span[id="im"]').html());
            $('select[name="tipo"]').val($(this).find('span[id="tp"]').html());
            $('textarea[name="descricao"]').val($(this).find('span[id="des"]').html());
            $(".dest").html($(this).find('span[id="nm"]').html());
            var tp = $(this).find('span[id="tp"]').html();
            $(".tvideo").html(function(){
                if(tp=='1'){
                    return "Video";
                }else{
                    if(tp=='2'){
                        return "Áudio";
                        
                    }else{
                        return "eBook";
                    }
                }
            });
            $("div.anuncio > p > span").html($(this).find('span[id="vl"]').html());
            
            document.querySelector(".anuncio1").src="https://php-web-service-gustavoferreira.c9users.io/digiudo/view/imagens/uploads/"+$(this).find('span[id="im"]').html();
            modeledt = {"id":$(this).find('span[id="cd"]').html(),
            "nome" : $('input[name="nome"]').val($(this).find('span[id="nm"]').html()),
            "valor" : $('input[name="valor"]').val($(this).find('span[id="vl"]').html()),
            "tipo" : $('select[name="tipo"]').val($(this).find('span[id="tp"]').html()),
            "capa" : $(this).find('span[id="im"]').html(),
            "descricao" : $('textarea[name="descricao"]').val($(this).find('span[id="des"]').html())};
    });
}
function ajuste(){
    $('#btn-alt').addClass('block');
    $('#btn-conc').addClass('block');
    $('#btn-canc').addClass('block');
    $('tbody tr').on("click");
    $('input[name="nome"]').val("");
    $('input[name="valor"]').val("");
    $('select[name="tipo"]').val("");
    $('#fileupload').val("");
    $('textarea[name="descricao"]').val(""); 
    $('#btn-nv').attr("onclick","novo()");
    $('input[name="nome"]').attr("disabled","disabled");
    $('input[name="valor"]').attr("disabled","disabled");
    $('#fileupload').attr("disabled","disabled");
    $('select[name="tipo"]').attr("disabled","disabled");
    $('textarea[name="descricao"]').attr("disabled","disabled");
    $('#btn-alt').removeAttr("onclick");
    $('#btn-alt').attr("disabled",'disabled');
    $('#btn-conc').attr("disabled",'disabled');
    $('#btn-canc').attr("disabled",'disabled');
    $('#btn-conc').removeAttr("onclick");
    $('#btn-canc').removeAttr("onclick");
    document.querySelector(".anuncio1").src="https://php-web-service-gustavoferreira.c9users.io/digiudo/view/imagens/outras/semimagem.jpg";
}

function ajusteEdit(){
    $('tbody tr').on("click");
    $('#btn-nv').attr("onclick","novo()");
    $('#btn-nv').removeAttr("disabled",'disabled');
    $('#btn-nv').removeClass('block');
    $('input[name="nome"]').attr("disabled","disabled");
    $('input[name="valor"]').attr("disabled","disabled");
    $('#fileupload').attr("disabled","disabled");
    $('select[name="tipo"]').attr("disabled","disabled");
    $('textarea[name="descricao"]').attr("disabled","disabled");
    $('#btn-conc').removeAttr("onclick");
    $('#btn-canc').removeAttr("onclick");
    $('#btn-conc').attr("disabled",'disabled');
    $('#btn-canc').attr("disabled",'disabled');
    $('#fileupload').val("");
    $('#btn-conc').addClass('block');
    $('#btn-canc').addClass('block');
}


    $("#fileupload").change(function(){
        readURL(this);
    });

function readURL(input){
    img = input.files[0].name;
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function (e) {
		$('.anuncio1')
			.attr('src', e.target.result)
		};
		reader.readAsDataURL(input.files[0]);
	}
}
//Só ajusta o valor.
	function BlockKeybord()
		{
			if(window.event) 
			{
				if((event.keyCode < 48) || (event.keyCode > 57))
				{
					event.returnValue = false;
				}
			}
			else if(e.which) // Netscape/Firefox/Opera
			{
				if((event.which < 48) || (event.which > 57))
				{
					event.returnValue = false;
				}
			}

			
		}

		function troca(str,strsai,strentra)
		{
			while(str.indexOf(strsai)>-1)
			{
				str = str.replace(strsai,strentra);
			}
			return str;
		}

		function FormataMoeda(campo,tammax,teclapres,caracter)
		{
			if(teclapres == null || teclapres == "undefined")
			{
				var tecla = -1;
			}
			else
			{
				var tecla = teclapres.keyCode;
			}

			if(caracter == null || caracter == "undefined")
			{
				caracter = ".";
			}

			vr = campo.value;
			if(caracter != "")
			{
				vr = troca(vr,caracter,"");
			}
			vr = troca(vr,"/","");
			vr = troca(vr,",","");
			vr = troca(vr,".","");

			tam = vr.length;
			if(tecla > 0)
			{
				if(tam < tammax && tecla != 8)
				{
					tam = vr.length + 1;
				}

				if(tecla == 8)
				{
					tam = tam - 1;
				}
			}
			if(tecla == -1 || tecla == 8 || tecla >= 48 && tecla <= 57 || tecla >= 96 && tecla <= 105)
			{
				if(tam <= 2)
				{
					campo.value = vr;
				}
				if((tam > 2) && (tam <= 5))
				{
					campo.value = vr.substr(0, tam - 2) + ',' + vr.substr(tam - 2, tam);
				}
				if((tam >= 6) && (tam <= 8))
				{
					campo.value = vr.substr(0, tam - 5) + caracter + vr.substr(tam - 5, 3) + ',' + vr.substr(tam - 2, tam);
				}
				if((tam >= 9) && (tam <= 11))
				{
					campo.value = vr.substr(0, tam - 8) + caracter + vr.substr(tam - 8, 3) + caracter + vr.substr(tam - 5, 3) + ',' + vr.substr(tam - 2, tam);
				}
				if((tam >= 12) && (tam <= 14))
				{
					campo.value = vr.substr(0, tam - 11) + caracter + vr.substr(tam - 11, 3) + caracter + vr.substr(tam - 8, 3) + caracter + vr.substr(tam - 5, 3) + ',' + vr.substr(tam - 2, tam);
				}
				if((tam >= 15) && (tam <= 17))
				{
					campo.value = vr.substr(0, tam - 14) + caracter + vr.substr(tam - 14, 3) + caracter + vr.substr(tam - 11, 3) + caracter + vr.substr(tam - 8, 3) + caracter + vr.substr(tam - 5, 3) + ',' + vr.substr(tam - 2, tam);
				}
			}
		}

		function maskKeyPress(objEvent)
		{
			var iKeyCode;
						
			if(window.event) // IE
			{
				iKeyCode = objEvent.keyCode;
				if(iKeyCode>=48 && iKeyCode<=57) return true;
				return false;
			}
			else if(e.which) // Netscape/Firefox/Opera
			{
				iKeyCode = objEvent.which;
				if(iKeyCode>=48 && iKeyCode<=57) return true;
				return false;
			}
			
			
		}