'use strict';
/* Directives */
angular.module('myApp.directives', []).
directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}])
.directive('mydiv', function () {                                                                                              
  return {
    scope: {}, 
    restrict: 'E',
    template: ['<p title ="Click Me">',
    'Click the text and see what happens',
    '</p>'].join(''),
    link: function (scope, element, attrs) {
      element.bind('click', function (e) {
        element.toggleClass('mydivclass');
      }); 
    }   
  }   
});
