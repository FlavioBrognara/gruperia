angular.module('myApp',["firebase" ])
.controller('myCtrl',function($scope,$firebase){

  var config = {
    apiKey: "AIzaSyCEwR-x9JBU4zMFejVANnLKLH3MVU2UuIQ",
    authDomain: "groups-7e832.firebaseapp.com",
    databaseURL: "https://groups-7e832.firebaseio.com",
    storageBucket: "groups-7e832.appspot.com",
    messagingSenderId: "424511250745"
  };
  firebase.initializeApp(config);

  var db = firebase.database();

  $scope.user={email:'',password:''}

  $scope.add = function(){
    db.ref('users').push({
      email: $scope.user.email,
      password: $scope.user.password
    });
  }



})
