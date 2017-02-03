angular.module('starter').controller('clienteController',function($scope){

	$scope.cliente = {};

	$scope.cadastro = function (){
		console.log($scope.cliente);
	}
});