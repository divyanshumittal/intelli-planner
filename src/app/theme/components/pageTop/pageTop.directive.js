/**
 * 
 *
 */
(function () {
  'use strict';

  angular.module('ScalaApp.theme.components')
      .directive('pageTop', pageTop);

  /** @ngInject */
  function pageTop() {
    return {
      restrict: 'E',
      templateUrl: 'app/theme/components/pageTop/pageTop.html'
    };
  }

})();