	angular.module('starter')
	.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('index');

		$stateProvider
		.state('cadastro/cliente',{
      		url : '/cadastro/cliente',
      		templateUrl : 'template/cliente/cadastro.html',
      		controller: 'clienteController'
		})
		.state('cadastro/produto',{
      		url : '/cadastro/produto',
      		templateUrl : 'template/produto/cadastro.html',
      		controller: 'produtoController'
		})
		.state('cadastro/venda',{
      		url : '/cadastro/venda',
      		templateUrl : 'template/venda/cadastro.html',
      		controller: 'vendaController'
		})
		.state('index',{
      		url : '/index',
      		templateUrl : 'index.html',
      		controller: 'homeController'
		});
	});