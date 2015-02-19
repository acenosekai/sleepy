app.controller('HomeCtrl', ['$scope','Auth', function($scope,Auth) {
    
    Auth.getSession(
                        function(data){
                            console.log(data);
//                            $state.go('app.home');
                        },
                        function(data){
                            console.log(data);
                        }
                    );
  
}]);