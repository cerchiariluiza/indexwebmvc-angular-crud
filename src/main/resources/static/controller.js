var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {

  $scope.servicos = new Object();


$scope.salvar = function() {
  $http.post("http://localhost:8080/manutencoes", {
    'id':$scope.id,
    'nome':$scope.nome,
    'categoria':$scope.categoria,
    'data':$scope.data
    
  })
  };   



$scope.getAll = function(){
    $http.get("http://localhost:8080/manutencoes")
    .then(function(resposta) {
       $scope.manutencoes = resposta.data; 
    });
  }

  $scope.getAll();
});