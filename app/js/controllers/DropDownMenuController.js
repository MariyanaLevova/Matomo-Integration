'use strict';

foodMeApp.controller("DropDownMenuController", ['$scope', function($scope) {
   $scope.options = ['Option A', 'Option B', 'Option C'];
   $scope.selection = "";
   $scope.temp = "";
   $scope.dropDownSelect = function() {
	   if($scope.selection != "" && $scope.selection != $scope.temp) {
			trackDropDownSelection($scope.selection);
			$scope.temp = $scope.selection;
	   }
   }
}]);