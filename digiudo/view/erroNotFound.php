<!DOCTYPE html>

<html lang="pt-br">
<head>
<meta charset="utf-8">
<title>Digiúdo - Cadastro Inicial</title>
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
		<?php include "css/login.css"; ?>
    </style>
	<script>
        <?php include "js/bibliotecaJQuery/jquery-2.2.0.js"; ?>
    </script>
	<script>
        <?php include "js/principal.js"; ?>
    </script>
	<script>
        <?php include "js/cadastroInic.js"; ?>
    </script>
</head>
<body>
<header>
	<a href="index" ><h1>Digiúdo</h1></a>
	
	<ul>
		<li class="lis"><a href="compra">comprar</a></li>
		<li class="lis"><a href="vender">vender</a></li>
		<li class="lis"><a href="saibamais">saiba mais</a></li>
		<li class="lis"><a href="cadastroUsuario">cadastrar</a></li>
		<li class="lis"><a href="vender.html">login</a></li>
		<li class="lis"><a href="#">carrinho</a></li>	
	</ul>
	
	<div id="area-busca">
	<label><span>Pesquisar</span>
	<input type="search" name="pesq" id="pesq" placeholder="Pesquisar">
	</label>
	</div>
	<span class="cabeca">
	</span>
</header>

<div id="notFound">
	<img src="https://php-web-service-gustavoferreira.c9users.io/digiudo/view/imagens/outras/404_new.jpg" width="100%">
</div>


</body>
</html>
