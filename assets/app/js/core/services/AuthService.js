//app.factory('Auth', ['$http',
//    function($http) {
//        return {
//            //            getSession: function () {
//            //                return session;
//            //            },
//            //            signIn: function (user, succes, error) {
//            //                console.log("doSignIn");
//            //                //                if (login.username == "admin" && login.password == "admin") {
//            //                //                    session.isLogedIn = true;
//            //                //                    return true;
//            //                //                } else {
//            //                //                    return false;
//            //                //                }
//            //            },
//            register: function(user, success, error) {
//                if (user == undefined) {
//                    user = {};
//                }
//                $http.post('/api/auth/local/register', user).
//                success(function(data, status, headers, config) {
//                    if (data.errors != null) {
//                        error(data);
//                    } else {
//                        success(data);
//                    }
//                }).
//                error(function(data, status, headers, config) {
//                    error(data);
//                });
//            },
//            login: function(user, success, error) {
//                if (user == undefined) {
//                    user = {identifier:null};
//                }
//                
//                $http.post('/api/auth/local', user).
//                success(function(data, status, headers, config) {                   
//                    if (data.errors != null) {
//                        error(data);
//                    } else {
//                        success(data);
//                    }
//                }).
//                error(function(data, status, headers, config) {                    
//                    error(data);
//                });
//                
//            },
//            logout: function(user, success, error) {
//                
//                $http.get('/api/auth/logout').
//                success(function(data, status, headers, config) {
//                    success(data);
//                }).
//                error(function(data, status, headers, config) {
//                    error(data);
//                });
//                
//            },
//            getSession: function(success,error) {                
//                $http.get('/api/auth/session').
//                success(function(data, status, headers, config) {
//                    success(data);
//                }).
//                error(function(data, status, headers, config) {
//                    error(data);
//                });
//                
//            }
//        };
//    }
//]);