'use strict';

foodMeApp.controller("FormController", ['$scope', function($scope) {
      $scope.list = [];
      $scope.text;
      $scope.submit = function() {
        if ($scope.text) {
          $scope.list.push(this.text);
          $scope.text = '';
        }
      };
    }]);
	
	

