angular.module('starter').controller('cadastroController',function($scope){

	$scope.cliente = {};

	$scope.cadastro = function (){
		console.log($scope.cliente);
	}
});