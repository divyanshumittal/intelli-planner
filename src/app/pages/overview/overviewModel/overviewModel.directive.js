(function () {
    'use strict';

    angular.module('ScalaApp.pages.overview')
        .directive('overviewModel', overviewModel);

    /** @ngInject */
    function overviewModel() {
        return {
            restrict: 'E',
            controller: 'overviewModelCtrl',
            templateUrl: 'app/pages/overview/overviewModel/overviewModel.html'
        };
    }
})();