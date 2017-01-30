angular.module('myApp',['firebase' ])
.controller('myCtrl',function($scope,$firebase){

  var ref = new Firebase("https://groups-7e832.firebaseio.com/");

  var sync = $firebase(ref);

  $scope.DB = sync.$asArray();

  $scope.add=function(){
    $scope.DB.$add($scope.app);
    $scope.app={nome:'',etc:'',categoria:'',descricao:''}
    alert("Criado com sucesso!");

  }

  $scope.edit=function(value){
    $scope.app=value
  }
  $scope.delete=function(item){
    $scope.DB.$remove(item)
  }


})
