qna.factory('AuthService', function($http, $localStorage, $rootScope) {
    var service = {};
    var currentUser = null;

    service.login = login;
    service.logout = logout;
    service.currentUser = currentUser;

    return service;

    function getCurrentUser(){
        return currentUser;
    }

    function login(username, password, callback) {
        /*$http.post('http://192.168.33.103:4503/libs/granite/core/content/login.html',
            {
                j_username: 'admin',
                j_password: 'admin',
                resource: '/',
                _charset_: 'UTF-8' 
            })
            .success(function (response) {
                // login successful if there's a token in the response
                if (response.token) {
                    // store username and token in local storage to keep user logged in between page refreshes
                    $localStorage.currentUser = { username: username, token: response.token };

                    // add jwt token to auth header for all requests made by the $http service
                    $http.defaults.headers.common.Authorization = 'Bearer ' + response.token;

                    // execute callback with true to indicate successful login
                    callback(true);
                } else {
                    // execute callback with false to indicate failed login
                    callback(false);
                }
            }).error(function(response){
                alert(response);
            }
        );*/
        this.currentUser = username;
        callback(true);
    }

    function logout() {
        // remove user from local storage and clear http auth header
        delete $localStorage.currentUser;
        $http.defaults.headers.common.Authorization = '';
    }
});