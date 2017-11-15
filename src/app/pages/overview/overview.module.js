/**
 *
 *
 */
(function () {
  'use strict';

  angular.module('ScalaApp.pages.overview', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('overview', {
          url: '/overview',
          templateUrl: 'app/pages/overview/overview.html',
          title: 'Mining management'
        });
  }

})();
