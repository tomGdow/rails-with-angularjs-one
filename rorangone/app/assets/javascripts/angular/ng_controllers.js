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

			// Products
			var title=constants.TEMPLATE_THREE_TITLE;
			$scope.routeData = $route.current;
			var vm = this;
			vm.message=functions.greeting(title);
			vm.templateTitle = title;
			railsData.allProductsData().then(function(data) {
				vm.productsJson = data;
			});
			vm.productId = function (arg) {
				functions.product.setId(arg);
				console.log(arg)
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
			railsData.newProductForm().then(function(data) {
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
			railsData.productData().then(function(data) {
				vm.showproductjson = data;
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
		railsData.editProductForm().then(function(data) {
			vm.editproduct = $sce.trustAsHtml(data);
		});
		vm.currentId = functions.product.getId();

	}

]);
