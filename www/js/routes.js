	angular.module('starter')
	.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('cadastro');

		$stateProvider
		.state('cadastro',{
      		url : '/cadastro',
      		templateUrl : 'template/cadastro.html',
      		controller: 'cadastroController'
});
	});