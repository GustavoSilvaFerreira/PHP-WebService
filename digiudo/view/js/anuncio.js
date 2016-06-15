
//Anuncios
$(anuncios);
function anuncios(){

	function ajusteTipo(c){if(c==1){return "Video";}else{if(c=='2'){return "Áudio";}else{return "eBook";}}};
	
	var prin = document.querySelector("#dinamico");
	vBusca = [];
	$.ajax({
        type: 'GET',
        dataType: "json",
        cache: false,
        contentType:"application/json",    
        url: 'https://php-web-service-gustavoferreira.c9users.io/listaTodosProduto',
    }).done(function(e){
        if(e!=null){
            for(var i = 0; i<e.length; i++){
            	var div = document.createElement('div');
				div.className = "anuncio";
				var imgs = document.createElement('img');
				imgs.src = "https://php-web-service-gustavoferreira.c9users.io/digiudo/view/imagens/uploads/"+e[i].capa;
				imgs.alt = e[i].descricao;
				imgs.className = 'anuncio1';
				var h = document.createElement('h2');
				h.className = 'dest';
				h.innerHTML = e[i].nome;
				var par1 = document.createElement('p');
				par1.className = 'tvideo';
				par1.innerHTML = ajusteTipo(e[i].tipo);
				var par2 = document.createElement('p');
				par2.innerHTML = "Por apenas: <br><span>"+e[i].valor+"</span>";
				var inp = document.createElement('input');
				inp.type = "submit";
				inp.value = "Adicionar ao Carrinho";
				inp.className = "boton";
				var a1 = document.createElement('a');
				a1.href ="#";
				a1.className = "link";
				a1.innerHTML = "Ver mais detalhes";
				div.appendChild(imgs);
				div.appendChild(h);
				div.appendChild(par1);
				div.appendChild(par2);
				div.appendChild(inp);
				div.appendChild(a1);
				prin.appendChild(div);
				vBusca.push(div);
            }
        }
    });

}
//Pesquisa
function busca(val){
	var res = [];
	var valor = val;
	var pesq = vBusca;
	for(var i=0; i<pesq.length;i++){
		var x = pesq[i].querySelector('h2').innerHTML;
		var y = x.toLowerCase();
		var val = valor.toLowerCase();
		if(valor != "" && y.indexOf(val) >=0){
			res.push(pesq[i]);
		}
	}
	if(res.length == 0){
		alert("Nenhum resultado encontrado!!!");
		var prin = document.querySelector("#dinamico").innerHTML = "";
		$(anuncios);
	}else{
		var prin = document.querySelector("#dinamico");
		prin.innerHTML = "";
		for(var j=0; j<res.length;j++){
			var div = document.createElement('div');
			div.innerHTML += res[j].innerHTML;
			div.className = "anuncio";
			prin.appendChild(div);
		}
	}
}
function buscaHead(){
	var valor = document.querySelector('#pesq').value;
	$('#busc').val("");
	busca(valor);
}
function buscaPrinc(){
	var valor = document.querySelector('#busc').value;
	$('#pesq').val("");
	busca(valor);
}

