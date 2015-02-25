app.controller('LoginCtrl', ['$scope', 'Auth',
  function($scope, Auth) {
    $scope.doLogin = function(login) {
      if ($scope.loginForm.$valid) {
        Auth.login(login, function(data) {
          console.log(data);
          Auth.session(function(data) {
            console.log(data);
          }, function(data) {
            console.error(data)
          })
        }, function(data) {
          console.log(data)
        });
        console.log("login");
      }
    }
  }
]);
