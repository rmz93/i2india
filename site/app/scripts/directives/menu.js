'use strict';

angular.module('siteApp')
  .directive('menu', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.html('this is the menu directive');
      }
    };
  });
