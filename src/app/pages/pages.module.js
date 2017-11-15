(function () {
    'use strict';

    angular.module('ScalaApp.pages', [
        'ui.router',
        'ScalaApp.pages.dashboard',
        'ScalaApp.pages.overview',
        'ScalaApp.pages.charts'
    ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($urlRouterProvider) {
        $urlRouterProvider.otherwise('/overview');
    }

})();
