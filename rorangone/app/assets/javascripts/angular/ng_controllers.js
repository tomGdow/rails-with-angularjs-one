angular.module('myApp.controllers', ['ngSanitize' 
])
.controller('MyNavCtrl', ['$scope', '$route', '$location','$sce','functions',
		function ($scope, $route, $location, $sce, functions) {

			var vm = this;
			$scope.$watch(function(vm){
				return $location.path();
			}, function(value){
				vm.active=functions.activeNav(value);
				//console.log(value);
			});

		}
])
.controller('MyCtrl1', ['$scope', '$route','constants', 'functions','exampleDates',
		function ($scope, $route, constants, functions, exampleDates) {

			// Use scope
			$scope.message="Hello from Template 1";
			$scope.routeData = $route.current;
			$scope.templateTitle = constants.TEMPLATE_ONE_TITLE; 

			// A better way?
			var vm = this;
			vm.templateTitleAlt = constants.TEMPLATE_ONE_TITLE;
			vm.appOwnerFirstName = functions.makeFirstName(constants.APP_OWNER);
			vm.appOwnerLastName = functions.makeLastName(constants.APP_OWNER);
			vm.exampleDates=exampleDates;

		}                         
])
.controller('MyCtrl2', ['$scope', '$route', 'constants', 'allIrelandData','functions',
		function ($scope, $route, constants, allIrelandData, functions) {

			$scope.routeData = $route.current;
			var vm = this;
			vm.message=functions.greeting(constants.TEMPLATE_TWO_TITLE);
			vm.templateTitle = constants.TEMPLATE_TWO_TITLE;
			vm.winners = allIrelandData.football;
		}
])
.controller('MyCtrl3', ['$scope', '$route', 'functions', 'constants', '$sce',
		function ($scope, $route, functions, constants, $sce) {

			$scope.routeData = $route.current;
			var vm = this;
			vm.message=functions.greeting(constants.TEMPLATE_THREE_TITLE);
			vm.templateTitle = constants.TEMPLATE_THREE_TITLE;
		}
])
.controller('MyCtrl4', ['$scope', '$route', 'functions', 'constants', '$sce',
		function ($scope, $route, functions, constants, $sce) {

			$scope.routeData = $route.current;
			var vm = this;
			vm.message=functions.greeting(constants.TEMPLATE_FOUR_TITLE);
			vm.templateTitle = constants.TEMPLATE_FOUR_TITLE;

		}
])
.controller('MyCtrl5', ['$scope', '$route', '$sce', 'functions', 'constants',
		function ($scope, $route, $sce, functions, constants) {

			$scope.routeData = $route.current;
			var vm = this;
			vm.message=functions.greeting(constants.TEMPLATE_FIVE_TITLE);
			vm.templateTitle = constants.TEMPLATE_FIVE_TITLE;

		}
]).controller('MyCtrl6', ['$scope', '$route', '$sce', 'functions', 'constants', 
	function ($scope, $route, $sce, functions, constants) {

		$scope.routeData = $route.current;
		var vm = this;
		vm.message=functions.greeting(constants.TEMPLATE_SIX_TITLE);
			vm.templateTitle = constants.TEMPLATE_SIX_TITLE;

	}

]);
