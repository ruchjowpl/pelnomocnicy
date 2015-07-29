'use strict';

angular.module('pelnomocnicyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('thankyou', {
        url: '/thankyou',
        templateUrl: 'app/main/thankyou.html',
        controller: 'MainCtrl'
      });
  });