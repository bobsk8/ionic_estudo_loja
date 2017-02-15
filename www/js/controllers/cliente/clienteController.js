angular.module('starter').controller('clienteController',function($scope,$ionicPopup,$state,Cliente){

	$scope.cliente = {};
	$scope.clientes = [];

	$scope.cadastro = function (){
		if(!!$scope.cliente.nome && !!$scope.cliente.cpf 
			&& !!$scope.cliente.aniversario){
				$scope.cliente.id = 0;

			Cliente
				.create($scope.cliente)
				.$promise
				.then(function (data) {
					$scope.cliente = '';					
				});
				popupSucesso($scope.cliente.nome);
			}
			$scope.getClientes();
	}

	$scope.getClientes = function(){
		Cliente.find().$promise
		.then(function(datas){
			$scope.clientes = datas;
		});	
	}

	$scope.getClientes();

	function popupSucesso(nomeCliente){
		$ionicPopup.alert({
            title: 'Parabéns ' + nomeCliente,
            template: 'Seu cadastro foi realizado com sucesso.'
		}).then(function(){
			//$state.go('');
		});
	}

});