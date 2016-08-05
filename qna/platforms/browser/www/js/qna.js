var qna = angular
	.module('qna', ['ui.router', 'ngMessages', 'ngStorage'])
	.constant("PARAMS", {
		"PATH": "http://localhost:4503/content/qna/questions/"
	}).config(function($stateProvider, $urlRouterProvider) {
        // default route
        $urlRouterProvider.otherwise("/");
 
        // app routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home/index.view.html',
                controller: 'MainController',
                controllerAs: 'vm'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'login/index.view.html',
                controller: 'Login.IndexController',
                controllerAs: 'vm'
            });
    })
    .run(function($rootScope, $http, $location, $localStorage, AuthService) {
        // keep user logged in after page refresh
        if ($localStorage.currentUser) {
            $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
        }
 
        // redirect to login page if not logged in and trying to access a restricted page
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            var publicPages = ['/login'];
            var restrictedPage = publicPages.indexOf($location.path()) === -1;
            var currentUser = AuthService.currentUser;
            if (restrictedPage && !currentUser) {
                $location.path('/login');
            }
        });
    });