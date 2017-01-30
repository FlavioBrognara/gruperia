'use strict';

angular.module('myAppFB', ['firebase'])

alert("");
.controller('HomeCtrl', ['$scope', 'firebase','$firebaseSimpleLogin',function($scope,$firebaseSimpleLogin) {
  var firebaseObj = new Firebase("https://groups-7e832.firebaseio.com/");
  var loginObj = $firebaseSimpleLogin(firebaseObj);

  $scope.user = {};
  $scope.SignIn = function(e){
     e.preventDefault();
     var username = $scope.user.email;
     var password = $scope.user.password;
     loginObj.$login('password', {
                email: username,
                password: password
            })
            .then(function(user) {
                //Success callback
                console.log('Authentication successful');
            }, function(error) {
                //Failure callback
                console.log('Authentication failure');
            });
  }
}]);
