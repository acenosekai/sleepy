app.controller('LoginCtrl', ['$scope', function($scope) {
    
//    $scope.isValidIdentifier=function(identifier){
//        console.log("asdw");
//        return !validator.isNull(identifier);
//    }
//    
//    
//    
//    $scope.isValidPassword=function(password){
//        console.log("asdw");
//        return !validator.isNull(password);
//    }
    
  $scope.doLogin = function(login){
      if ($scope.formLogin.$valid) {
        console.log("login");
      }
      
  }
}]);