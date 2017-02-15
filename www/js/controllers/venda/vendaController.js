angular.module('starter').controller('vendaController',function($scope,$ionicPopup,$state,Venda){

	$scope.venda = {};
	$scope.vendas = [];

	$scope.cadastro = function (){
		if(!!$scope.venda.nome && !!$scope.venda.valor){
				$scope.venda.id = 0;

			Venda
				.create($scope.venda)
				.$promise
				.then(function (data) {
					$scope.venda = '';					
				});
				popupSucesso($scope.venda.nome);
			}
			$scope.getVendas();
	}

	$scope.getVendas = function(){
		Venda.find().$promise
		.then(function(datas){
			$scope.vendas = datas;
		});	
	}

	$scope.getVendas();

	function popupSucesso(nomeVenda){
		$ionicPopup.alert({
            title: 'Parabéns ' + nomeVenda,
            template: 'Seu cadastro foi realizado com sucesso.'
		}).then(function(){
			//$state.go('');
		});
	}
});