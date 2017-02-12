angular.module('starter').service('produtoService',function($http){

    var utrl = '';

    return {
        getCliente: function () {
            return $http.get(url).then(function(response){
                return response.data;
            })
        }

    }
    
});