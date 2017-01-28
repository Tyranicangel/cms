// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller: 'MainCtrl'
  })

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.rbi', {
      url: '/rbi',
      views: {
        'tab-rbi': {
          templateUrl: 'templates/tab-rbi.html',
          controller: 'RbiCtrl'
        }
      }
    })

  .state('tab.bills', {
      url: '/bills',
      views: {
        'tab-bills': {
          templateUrl: 'templates/tab-bills.html',
          controller: 'BillsCtrl'
        }
      }
    })

  .state('tab.pd', {
      url: '/pd',
      views: {
        'tab-bills': {
          templateUrl: 'templates/tab-pd.html',
          controller: 'PdCtrl'
        }
      }
    })

  .state('tab.pao', {
      url: '/pao',
      views: {
        'tab-bills': {
          templateUrl: 'templates/tab-pao.html',
          controller: 'PaoCtrl'
        }
      }
    })

  .state('tab.dta', {
      url: '/dta',
      views: {
        'tab-bills': {
          templateUrl: 'templates/tab-dta.html',
          controller: 'DtaCtrl'
        }
      }
    })

  .state('tab.dwa', {
      url: '/dwa',
      views: {
        'tab-bills': {
          templateUrl: 'templates/tab-dwa.html',
          controller: 'DwaCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('/tab/home');

});
