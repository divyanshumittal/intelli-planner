/**
 *
 *
 */
(function () {
  'use strict';

  angular.module('ScalaApp.pages.dashboard', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'app/pages/dashboard/dashboard.html',
          title: 'Scala Rally - Prediction Dashboard'
        });
  }

})();
