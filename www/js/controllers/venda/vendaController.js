angular.module('starter').controller('vendaController',function($scope,$ionicPopup,$state){

	$scope.venda = {};

	$scope.vendas = [
		{nomeCliente: 'Rodrigo',produto:'Alface',preco:1.5},
		{nomeCliente: 'Alberto',produto:'Mouse',preco:21.5},
		{nomeCliente: 'Lilian',produto:'Celular',preco:1000.5},
		{nomeCliente: 'Maria',produto:'Feijão',preco:3.5}
	]

	$scope.cadastro = function (){
		if($scope.venda.nomeCliente!=undefined && $scope.venda.produto!=undefined
			&& $scope.venda.preco!=undefined){
				$scope.vendas.push($scope.venda);
				popupSucesso($scope.venda.nomeCliente);
				$scope.venda = {};
			}
	}

	function popupSucesso(nomeCliente){
		$ionicPopup.alert({
            title: 'Parabéns ',
            template: 'Sua venda foi cadastrada com sucesso.'
		}).then(function(){
			$state.go('');
		});
	}
});