angular.module('starter').controller('clienteController',function($scope,$ionicPopup,$state){

	$scope.cliente = {};
	
	$scope.cadastro = function (){
		if($scope.cliente.nome!=undefined && $scope.cliente.cpf!=undefined 
			&& $scope.cliente.nascimento!=undefined){
				popupSucesso($scope.cliente.nome);
			}
	}


	function popupSucesso(nomeCliente){
		$ionicPopup.alert({
            title: 'Parabéns ' + nomeCliente,
            template: 'Seu cadastro foi realizado com sucesso.'
		}).then(function(){
			$state.go('');
		});
	}

});