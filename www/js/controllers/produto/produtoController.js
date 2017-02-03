angular.module('starter').controller('produtoController',function($scope){

	$scope.produto = {};

	$scope.cadastro = function (){
		console.log($scope.produto);
	}
});