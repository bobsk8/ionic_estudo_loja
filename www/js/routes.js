angular.module('starter')
	.config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('app/home');

		$stateProvider

			.state('app', {
				url: '/app',
				abstract: true,
				templateUrl: 'template/menu/menu.html'
			})
			.state('app.home', {
				url: '/home',
				views: {
					'menuContent': {
						templateUrl: 'template/home/home.html',
						controller: 'homeController'
					}
				}
			})
			.state('app.cadastro/cliente', {
				url: '/cadastro/cliente',
				views: {
					'menuContent': {
						templateUrl: 'template/cliente/cadastro.html',
						controller: 'clienteController'
					}
				}
			})
			.state('app.cadastro/produto', {
				url: '/cadastro/produto',
				views: {
					'menuContent': {
						templateUrl: 'template/produto/cadastro.html',
						controller: 'produtoController'
					}
				}
			})
			.state('app.cadastro/venda', {
				url: '/cadastro/venda',
				views: {
					'menuContent': {
						templateUrl: 'template/venda/cadastro.html',
						controller: 'vendaController'
					}
				}
			});
	});