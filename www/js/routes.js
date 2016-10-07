angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('tabsController.form', {
    url: '/form',
    views: {
      'tab1': {
        templateUrl: 'templates/form.html',
        controller: 'formCtrl'
      }
    }
  })

  .state('tabsController.cloudTabDefaultPage', {
    url: '/map',
    views: {
      'tab4': {
        templateUrl: 'templates/cloudTabDefaultPage.html',
        controller: 'cloudTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController.detail',{
    url:"/details/:id",
    views: {
      'tab4': {
        templateUrl:'templates/detail.html',
        controller:'detailsController'
      }
    }
  })

  .state('tabsController', {
    url: '/main',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/main/form')



});
