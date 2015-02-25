app.controller('HomeCtrl', ['$scope', 'Auth',
  function($scope, Auth) {
    Auth.session(
      function(data) {
        console.log(data);
      },
      function(data) {
        console.log(data);
      }
    );
  }
]);
