angular.module('starter').controller('produtoController',function($scope){

	$scope.produto = {};

	$scope.cadastro = function (){
		if($scope.produto.nomeProduto!=undefined && $scope.produto.preco!=undefined 
			&& $scope.produto.quantidade!=undefined){
				popupSucesso($scope.produto.nomeProduto);
			}
	}


	function popupSucesso(nomeProduto){
		$ionicPopup.alert({
            title: 'Parabéns ' + nomeProduto,
            template: 'Seu produto foi cadastrado com sucesso.'
		}).then(function(){
			$state.go('');
		});
	}

});