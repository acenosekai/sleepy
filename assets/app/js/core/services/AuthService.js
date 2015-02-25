app.factory('Auth', ['$http',
  function($http) {
    return {
      register: function(user, success, error) {
        if (user == undefined) {
          user = {};
        }
        $http.post('/rest/auth/local/register', user).
        success(function(data, status, headers, config) {
          if (data.errors != null) {
            error(data, status, headers, config);
          } else {
            success(data, status, headers, config);
          }
        }).
        error(function(data, status, headers, config) {
          error(data, status, headers, config);
        });
      },
      login: function(user, success, error) {
        if (user == undefined) {
          user = {
            identifier: null
          };
        }

        $http.post('/rest/auth/local', user).
        success(function(data, status, headers, config) {
          if (data.errors != null) {
            error(data, status, headers, config);
          } else {
            success(data, status, headers, config);
          }
        }).
        error(function(data, status, headers, config) {
          error(data, status, headers, config);
        });

      },
      logout: function(user, success, error) {

        $http.get('/rest/auth/logout').
        success(function(data, status, headers, config) {
          success(data, status, headers, config);
        }).
        error(function(data, status, headers, config) {
          error(data, status, headers, config);
        });

      },
      session: function(success, error) {
        $http.get('/rest/auth/session').
        success(function(data, status, headers, config) {
          success(data, status, headers, config);
        }).
        error(function(data, status, headers, config) {
          error(data, status, headers, config);
        });

      }
    };
  }
]);
