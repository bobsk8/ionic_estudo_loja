angular.module('starter').controller('homeController',function($scope){

	$scope.cliente = {};

	$scope.cadastro = function (){
		console.log($scope.cliente);
	}
});