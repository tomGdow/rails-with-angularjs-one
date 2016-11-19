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

			var title=constants.TEMPLATE_ONE_TITLE;
			var owner=constants.APP_OWNER;
			// Use scope
			$scope.message="Hello from Template 1";
			$scope.routeData = $route.current;
			$scope.templateTitle = title; 

			// A better way?
			var vm = this;
			vm.templateTitleAlt = title;
			vm.appOwnerFirstName = functions.makeFirstName(owner);
			vm.appOwnerLastName = functions.makeLastName(owner);
			vm.exampleDates=exampleDates;

		}                         
])
.controller('MyCtrl2', ['$scope', '$route', 'constants', 'allIrelandData','functions','dowapi',
		function ($scope, $route, constants, allIrelandData, functions, dowapi) {

			var title=constants.TEMPLATE_TWO_TITLE;
			$scope.routeData = $route.current;
			var vm = this;
			vm.message=functions.greeting(title);
			vm.templateTitle = title;
			vm.winners = allIrelandData.football;
			dowapi.footballAllIrelands().then(function(data) {
				vm.gaaData = data;
			});
			dowapi.hurlingAllIrelands().then(function(data) {
				vm.hurlingData = data;
			});

		}
])
.controller('MyCtrl3', ['$scope', '$route', 'functions', 'constants', '$sce','railsData','$http',
		function ($scope, $route, functions, constants, $sce, railsData, $http) {

			// Products and scoped categories
			var title_product=constants.TEMPLATE_THREE_PRODUCT;
			var title_sport=constants.TEMPLATE_THREE_SPORT;
			var title_outdoor=constants.TEMPLATE_THREE_OUTDOOR;
			var title_household=constants.TEMPLATE_THREE_HOUSEHOLD;

			$scope.routeData = $route.current;
			var vm = this;
			vm.title_product = title_product;
			vm.title_sport = title_sport;
			vm.title_outdoor = title_outdoor;
			vm.title_household = title_household;

			railsData.retrieveJson('products').then(function(data) {
				vm.products = data;
			});
			railsData.retrieveJson('products/sport').then(function(data) {
				vm.sport = data;
			});
			railsData.retrieveJson('products/outdoor').then(function(data) {
				vm.outdoor = data;
			});
			railsData.retrieveJson('products/household').then(function(data) {
				vm.household = data;
			});

			vm.productId = function (arg) {
				functions.product.setId(arg);
			} 
		}
])
.controller('MyCtrl4', ['$scope', '$route', 'functions', 'constants', '$sce', 'railsData',
		function ($scope, $route, functions, constants, $sce, railsData) {

			// New Product

			var title=constants.TEMPLATE_FOUR_TITLE;
			$scope.routeData = $route.current;
			var vm = this;
			vm.message=functions.greeting(title);
			railsData.retrieveHtml('products/new').then(function(data) {
				vm.newproduct = $sce.trustAsHtml(data);
			});

		}
])
.controller('MyCtrl5', ['$scope', '$route', '$sce', 'functions', 'constants', 'railsData',
		function ($scope, $route, $sce, functions, constants, railsData) {

			// Show Product
			var title=constants.TEMPLATE_FIVE_TITLE;

			$scope.routeData = $route.current;
			var vm = this;
			vm.message=functions.greeting(title);
			vm.templateTitle = title;
			railsData.fetchJson('products').then(function(data) {
				vm.show = data;
			});
			vm.currentId = functions.product.getId();

		}
]).controller('MyCtrl6', ['$scope', '$route', '$sce', 'functions', 'constants', 'railsData',
	function ($scope, $route, $sce, functions, constants, railsData) {

		// Edit Product
		var title=constants.TEMPLATE_SIX_TITLE;
		$scope.routeData = $route.current;
		var vm = this;
		vm.message=functions.greeting(title);
		railsData.fetchHtml('products','edit').then(function(data) {
			vm.edit  = $sce.trustAsHtml(data);
		});
		vm.currentId = functions.product.getId();

	}

]);
