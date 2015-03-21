// Application Level State
app.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/home');

    $stateProvider
      .state('app', {
        templateUrl: 'playground/js/components/core/templates/main.tpl.html'
      })
      .state('app.playground', {
        views: {
          "": {
            templateUrl: 'playground/js/components/core/templates/playground.tpl.html'
          },

          "leftnav@app.playground": {
            templateUrl: 'playground/js/components/core/templates/leftnav.tpl.html'
          }
        }

      })
      .state('app.playground.home', {
        url: '/home',
        views: {
          "": {
            templateUrl: 'playground/js/components/core/templates/home.tpl.html'
          }
        }
      })
      .state('404', {
        url: '/404',
        templateUrl: 'playground/js/components/core/templates/404.tpl.html',
      });

  }
]);
