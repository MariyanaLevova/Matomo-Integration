'use strict';

foodMeApp.controller("FormController", ['$scope', function($scope) {
      $scope.list = [];
      $scope.text;
      $scope.searchSubmit = function() {
        if ($scope.text) {
		  trackSearchWord($scope.text);
          $scope.list.push(this.text);
          $scope.text = '';
        }
      };
    }]);
	
	

