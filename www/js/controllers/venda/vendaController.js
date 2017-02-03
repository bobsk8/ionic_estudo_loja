angular.module('starter').controller('vendaController',function($scope){

	$scope.venda = {};

	$scope.cadastro = function (){
		console.log($scope.venda);
	}
});