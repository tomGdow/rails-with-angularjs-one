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
}).directive('myTable', function () {
	return {
		scope: {collection: '=',
            'sendId': '&onSendId'}, 
		restrict: 'E',
		templateUrl: function (elem, attr) {
			return './home/' + attr.template + '.html'
		} 
	}
});
