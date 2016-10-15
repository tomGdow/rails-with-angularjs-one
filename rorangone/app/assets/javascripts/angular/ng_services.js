'use strict';
/* Services */
angular.module('myApp.services', [])
.value('version', '0.1')
.constant('constants', {

	APP_TITLE: 'Angular with Rails 5',
	APP_OWNER: 'Tom Doe',
	TEMPLATE_ONE_TITLE: 'Template 1',
	TEMPLATE_TWO_TITLE: 'Template 2',

});
