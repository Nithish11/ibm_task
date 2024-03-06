angular.module('authApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/signup', {
                templateUrl: 'signup.html',
                controller: 'SignupController',
                controllerAs: 'signupCtrl'
            })
            .when('/login', {
                templateUrl: 'login.html',
                controller: 'LoginController',
                controllerAs: 'loginCtrl'
            })
            .otherwise({ redirectTo: '/login' });
    })
    .controller('SignupController', function() {
        var vm = this;
        vm.submitSignup = function() {
            // Implement signup functionality here
            // Upon successful signup, navigate to login page
            window.location.href = '#/login';
        };
    })
    .controller('LoginController', function() {
        var vm = this;
        vm.submitLogin = function() {
            // Implement login functionality here
            // Upon successful login, navigate to personalized content page
            alert('Logged in successfully!');
            // Redirect to personalized content page
        };
    });
