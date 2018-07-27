/// <reference path="angular.js" />

var app = angular.module('mainApp', ['firebase', 'ui.router', 'ngAnimate']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '../html/customerHome.html',
            controller: 'customerController'
        })
        .state('details', {
            url: '/details',
            templateUrl: '../html/show-details.html',
            controller: 'customerController'
        });

    $urlRouterProvider.otherwise('/home')
})
var customerList = [];