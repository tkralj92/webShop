

var webApp = angular.module('WebApp',['ngRoute']);

webApp.config(function ($routeProvider) {
   $routeProvider.
       when('/',{
       templateUrl:'app/views/templates/proizvodi.html',
       controller: 'proizvodiCtrl'
   }).when('/login',{
       templateUrl:'app/views/templates/login.html',
       controller: ' '
   }).when('/register',{
       templateUrl:'app/views/templates/register.html',
       controller: 'registerCtrl'
   }).when('/:x',{
           templateUrl: 'app/views/templates/proizvod.html',
           controller: 'proizvodCtrl'
       }
   ).otherwise({
       redirectTo:'/'
   });
});