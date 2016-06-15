<!DOCTYPE html>

<html lang="pt-br">
<head>
<meta charset="utf-8">
<title>Digiúdo - Painel</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<style>
		<?php include 'http://fonts.googleapis.com/css?family=Roboto'; ?>
    </style>
	<style>
		<?php include "css/principal.css"; ?>
    </style>
	<style>
		<?php include "css/breadcrumbs.css"; ?>
    </style>
	<style>
		<?php include "css/footer.css"; ?>
    </style>
	<style>
		<?php include "css/painel.css"; ?>
    </style>
	<script>
        <?php include "js/bibliotecaJQuery/jquery-2.2.0.js"; ?>
    </script>
	<script>
        <?php include "js/painel.js"; ?>
    </script>
	<script>
        <?php include "js/principal.js"; ?>
    </script>
</head>
<body>
<header>
	<a href="index" ><h1>Digiúdo</h1></a>
	<div class="minha-conta">
		<ul id="menu-minha-conta">
			<li>Minha Conta
				<ul id="subMenu-minha-conta">
					<li><a href="#">Meus dados</a></li>
					<li><a href="#">Meu endereço</a></li>
					<li><a href="#">Alterar e-mail</a></li>
					<li><a href="#">Alterar senha</a></li>
					<li><a href="#">Preferências</a></li>
					<li><a href="logout">Sair</a></li>
				</ul>
			</li>
		</ul>
	</div>
	
	<div id="area-busca">
	<label><span>Pesquisar</span>
	<input type="search" name="pesq" id="pesq" placeholder="Pesquisar">
	</label>
	</div>
	<span class="burger">
	</span>
</header>


<nav id="menu-superior">	
	<ul>
		<li><a href="#"><img src="https://php-web-service-gustavoferreira.c9users.io/digiudo/view/imagens/icones/icone-painel.png" title="Painel" alt="Painel" class="icone"></a></li>
		<li><a href="compra"><img src="https://php-web-service-gustavoferreira.c9users.io/digiudo/view/imagens/icones/icone-comprar.png" title="Comprar" alt="Comprar" class="icone"></a></li>
		<li><a href="#"><img src="https://php-web-service-gustavoferreira.c9users.io/digiudo/view/imagens/icones/icone-minhas-compras.png" title="Minhas Compras" alt="icone-minhas-compras" class="icone"></a></li>
		<li><a href="cadastroProduto"><img src="https://php-web-service-gustavoferreira.c9users.io/digiudo/view/imagens/icones/icone-vender.png" title="Vender" alt="icone-vender" class="icone"></a></li>
		<li><a href="#"><img src="https://php-web-service-gustavoferreira.c9users.io/digiudo/view/imagens/icones/icone-minhas-vendas.png" title="Minhas Vendas" alt="icone-minhas-vendas" class="icone"></a></li>
		<li><a href="#"><img src="https://php-web-service-gustavoferreira.c9users.io/digiudo/view/imagens/icones/icone-meus-ganhos.png" title="Meus Ganhos" alt="icone-meus-ganhos" class="icone"></a></li>
		<li><a href="#"><img src="https://php-web-service-gustavoferreira.c9users.io/digiudo/view/imagens/icones/icone-carrinho.png" title="Carrinho" alt="icone-carrinho" class="icone"></a></li>
	</ul>
</nav>
<div id="breadcrumbs">
	<ul>
		<li><a href="index">home</a></li>
		<li>painel</li>
	</ul>
</div>

<main>
	<div id="perfil">
		<img src="https://php-web-service-gustavoferreira.c9users.io/digiudo/view/imagens/outras/foto-perfil.jpg" alt="Foto do Perfil" id="foto-perfil">
		<h2>Olá <?= $_SESSION["_ID"]['nome']?>,</h2>
		<p>Bem vindo(a)</p>
	</div>
	
	<div id="ganhos">
		<img src="https://php-web-service-gustavoferreira.c9users.io/digiudo/view/imagens/outras/grafico-de-ganhos.png" alt="Foto do Perfil" id="foto-ganhos">
		<h2>Ganhos da semana...</h2>
		<p>R$ 629,99</p>
		
	</div>
</main>

<aside id="principal">
	<h2>Destaques:</h2>
	<div class="anuncio">
		
		<img src="https://php-web-service-gustavoferreira.c9users.io/digiudo/view/imagens/comprar/energizesuavidasquared.jpg" alt="banner Lateral" class="anuncio1">
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
		
		<img src="https://php-web-service-gustavoferreira.c9users.io/digiudo/view/imagens/comprar/hm_dreamweaver.jpg" alt="banner Lateral" class="anuncio1">
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
		
		<img src="https://php-web-service-gustavoferreira.c9users.io/digiudo/view/imagens/comprar/capahotmart.jpg" alt="banner Lateral" class="anuncio1">
		<h2 class="dest">Máquina de Falar Inglês</h2>
		<p class="tvideo">Video</p>
		<p>
			Por apenas:<br>
			<span>R$ 56,99.</span>
		</p>
		
		<input type="submit" value="Adicionar ao Carrinho" class="boton">
		
		<a href="#" class="link">Ver mais detalhes</a>
	</div>
	<div class="anuncio">
		
		<img src="https://php-web-service-gustavoferreira.c9users.io/digiudo/view/imagens/comprar/AudioJusLogo.jpg" alt="banner Lateral" class="anuncio1">
		<h2 class="dest">Concurso Publico</h2>
		<p class="tvideo">Áudio</p>
		<p>
			Por apenas:<br>
			<span>R$ 11,59.</span>
		</p>
		
		<input type="submit" value="Adicionar ao Carrinho" class="boton">
		
		<a href="#" class="link">Ver mais detalhes</a>
	</div>
	
</aside>	


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