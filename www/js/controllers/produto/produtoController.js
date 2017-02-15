angular.module('starter').controller('produtoController',function($scope,$ionicPopup,$state,Produto){

	$scope.produto = {};
	$scope.produtos = [];

	$scope.cadastro = function (){
		if(!!$scope.produto.nome && !!$scope.produto.valor){
				$scope.produto.id = 0;

			Produto
				.create($scope.produto)
				.$promise
				.then(function (data) {
					$scope.produto = '';					
				});
				popupSucesso($scope.produto.nome);
			}
			$scope.getProdutos();
	}

	$scope.getProdutos = function(){
		Produto.find().$promise
		.then(function(datas){
			$scope.produtos = datas;
		});	
	}

	$scope.getProdutos();

	function popupSucesso(nomeProduto){
		$ionicPopup.alert({
            title: 'Parabéns ' + nomeProduto,
            template: 'Seu cadastro foi realizado com sucesso.'
		}).then(function(){
			//$state.go('');
		});
	}

});