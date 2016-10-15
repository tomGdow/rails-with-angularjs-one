angular.module('myApp.controllers', ['ngSanitize' 
])
.controller('MyCtrl1', ['$scope', 
    function ($scope) {
      // Use scope
      $scope.message="Hello from Template 1";
    }                         
])
.controller('MyCtrl2', ['$scope',
    function ($scope) {

      // A better way?
      var vm = this;
      vm.message="Greetings from Template 2";
    }
]);
