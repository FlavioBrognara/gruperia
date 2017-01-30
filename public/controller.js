angular.module('app',["firebase" ])
.controller('appCtrl',function($scope,$firebase){

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
    } else {
      // No user is signed in.
    }
  });

})
