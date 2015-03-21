// Application Level State
app.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    //    $urlRouterProvider.when('', '/login');
    $stateProvider
      .state('app.login', {
        url: '/login',
        templateUrl: 'playground/js/components/auth/templates/login.tpl.html',
        controller: 'LoginCtrl'
      })

  }
]);
