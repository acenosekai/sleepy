app.controller('RegisterCtrl', ['$scope', 'Auth',
  function($scope, Auth) {


    $scope.doRegister = function(r) {

      if ($scope.registerForm.$valid) {
//        console.log(r);
        Auth.register(r,
          function(data) {
            console.log(data);
          },
          function(data) {
            console.log(data);
          });
      }
    }
  }
]);
