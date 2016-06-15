<!DOCTYPE html>

<html lang="pt-br">
<head>
<meta charset="utf-8">
<title>Digiúdo - Home</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<style>
		<?php include 'http://fonts.googleapis.com/css?family=Amaranth'; ?>
    </style>
	<style>
        <?php include 'http://fonts.googleapis.com/css?family=Roboto'; ?>
    </style>
	<style>
        <?php include "css/compra.css"; ?>
    </style>
    <style>
        <?php include "css/principal.css"; ?>
    </style>
	<style>
        <?php include "css/footer.css"; ?>
    </style>
	<style>
        <?php include "css/home.css"; ?>
    </style>
	<script>
        <?php include "js/bibliotecaJQuery/jquery-2.2.0.js"; ?>
    </script>
	<script>
        <?php include "js/principal.js"; ?>
    </script>
    <script>
        <?php include "js/home.js"; ?>
    </script>
	<script>
        <?php include "js/video.js"; ?>
    </script>
    <!--
	<script>
        <?php include "js/anuncio.js"; ?>
    </script>
    -->
<script>
	$("#videoa").hover(function(){
		$("#videoa").hide();
	});
	

</script>
</head>
<body>
<header>
	<a href="index" ><h1>Digiúdo</h1></a>
	
	<ul>
		<li class="lis"><a href="compra">comprar</a></li>
		<li class="lis"><a href="<?php if(!$_SESSION["_ID"]){ echo "vender";}else{echo "cadastroProduto";}?>">vender</a></li>
		<li class="lis"><a href="saibamais">saiba mais</a></li>
		<li class="lis"><a href="cadastroUsuario">cadastrar</a></li>
		<li class="lis"><a href="<?php if(!$_SESSION["_ID"]){ echo "vender";}else{echo "painel";}?>"><?php if(!$_SESSION["_ID"]){ echo "login";}else{echo "painel";}?></a></li>
		<li class="lis"><a href="#">carrinho</a></li>	
	</ul>
	
	<div id="area-busca">
	<label><span>Pesquisar</span>
	<input type="search" name="pesq" id="pesq" placeholder="Pesquisar" onchange="buscaHome()">
	</label>
	</div>
	<span class="cabeca">
	</span>
</header>

<div id="princ">
	<h1>Classificados de Conteúdo Digital</h1>
	<video src="#" controls poster="https://php-web-service-gustavoferreira.c9users.io/digiudo/view/imagens/outras/posterhome.jpg" title="nossovideo" id="videob">
	</video>
	<video loop autoplay class="boxvideo" id="videoa" title="video promocional do Digiúdo">
		<source src="https://php-web-service-gustavoferreira.c9users.io/digiudo/view/videos/fundo.mp4">
	</video>
	<div class="centralizar-botao">
		<a href="compra.html" class="boton1">COMPRAR</a>
		<a href="vender.html" class="boton1">VENDER</a>
	</div>
	<a href="#" id="subir"><img src="https://php-web-service-gustavoferreira.c9users.io/digiudo/view/imagens/icones/next-section.png" alt="next"  ></a>
	</div >
<aside >
	<img src="https://php-web-service-gustavoferreira.c9users.io/digiudo/view/imagens/outras/mulher-duvida-mobile.png" alt="fundo2" >
</aside>

<nav class="saiba">
	<h1>Aprenda como comprar e vender no Digiúdo</h1>
	
	<p> 
		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua.
	</p>
	<div class="centralizar-saibaMais">
		<a href="saibamais.html" class="boton1">Saiba mais</a>
	</div>
</nav>
	<div class="fixar-next2">
		<a href="#" id="descer"><img src="https://php-web-service-gustavoferreira.c9users.io/digiudo/view/imagens/icones/next-section-escuro.png" alt="next2"></a>
	</div>
<main>
	<h2>O que você procura?</h2>
	<label><span>Pesquisar</span>
	<input type="search" name="buscaprincipal">
	</label>
	<img src="https://php-web-service-gustavoferreira.c9users.io/digiudo/view/imagens/icones/busq.png" alt="iconebuscaPagina">
<div class="conteudo">
	<div class="anuncio">
		
		<img src="https://php-web-service-gustavoferreira.c9users.io/digiudo/view/imagens/comprar/energizesuavidasquared.jpg" alt="Imagem do produto energize sua vida" class="anuncio1">
		<h2 class="dest">Energize Sua Vida</h2>
		<p class="tvideo">eBook</p>
		<p>
			Por apenas:<br>
			<span>R$ 36,89.</span>
		</p>
		
		<input type="submit" value="Adicionar ao Carrinho" class="boton">
		
		<a href="#" class="link">Ver mais detalhes</a>
	</div>
	
	<div class="anuncio">
		
		<img src="https://php-web-service-gustavoferreira.c9users.io/digiudo/view/imagens/comprar/hm_dreamweaver.jpg" alt="Imagem do produto dreamweaver total" class="anuncio1">
		<h2 class="dest">Dreamweaver Total</h2>
		<p class="tvideo">Video</p>
		<p>
			Por apenas:<br>
			<span>R$ 91,69.</span>
		</p>
		
		<input type="submit" value="Adicionar ao Carrinho" class="boton">
		
		<a href="#" class="link">Ver mais detalhes</a>
	</div>
	
	<div class="anuncio">
		
		<img src="https://php-web-service-gustavoferreira.c9users.io/digiudo/view/imagens/comprar/capahotmart.jpg" alt="Imagem do produto máquina de falar inglês" class="anuncio1">
		<h2 class="dest">Máquina de Falar Inglês</h2>
		<p class="tvideo">Video</p>
		<p>
			Por apenas:<br>
			<span>R$ 56,99.</span>
		</p>
		
		<input type="submit" value="Adicionar ao Carrinho" class="boton">
		
		<a href="#" class="link">Ver mais detalhes</a>
	</div>


</div>

</main>

<footer class="vcard"> <!-- hcard-->
<div class="blocos-footer">
	<p>Redes Sociais</p>
	<a href="#" class="url"><img src="https://php-web-service-gustavoferreira.c9users.io/digiudo/view/imagens/icones/face.png" alt="icone Facebook" class="photo"></a> <!-- hcard-->
	<a href="#" class="url"><img src="https://php-web-service-gustavoferreira.c9users.io/digiudo/view/imagens/icones/g+.png" alt="icone Google mais" class="photo"></a> <!-- hcard-->
	<a href="#" class="url"><img src="https://php-web-service-gustavoferreira.c9users.io/digiudo/view/imagens/icones/youtube.png" alt="icone youtube" class="photo"></a> <!-- hcard-->
	<a href="#" class="url"><img src="https://php-web-service-gustavoferreira.c9users.io/digiudo/view/imagens/icones/twitter.png" alt="icone twitter" class="photo"></a> <!-- hcard-->
</div>
<div class="blocos-footer">
	<div class="blocos-footer-centro">
		<p>Ligue grátis:</p>
		<img src="https://php-web-service-gustavoferreira.c9users.io/digiudo/view/imagens/icones/telefone.png" alt="icone telefone" class="photo"> <!-- hcard-->
		<div id="ligue-gratis" class="tel">0800 726 2020</div> <!-- hcard-->
	</div>
</div>
<div class="blocos-footer">
	<div class="blocos-footer-centro">
		<div class="correio"><a href="mailto:digiudo@digiudo.com" class="email">E-mail</a></div> <!-- hcard-->
		<div class="correio"><a href="#">Chat</a></div>
	</div>
</div>
<div id="identidade">
<h3 class="h3-footer">© 2015 - Todos os direitos reservados - <span class="fn">Digiúdo® Tecnologia</span></h3> <!-- hcard-->
<p>CNPJ: 08.077.938/0001-11</p>
	<div class="adr"> <!-- hcard-->
		<span class="street-address">Av. Paulista, 1785, Conj 77 e 78</span><br>
		<span class="locality">Bela Vista</span> - <span class="region">SP</span> - <span class="postal-code">01311-200</span>
	</div>
</div>
</footer>
</body>
</html>