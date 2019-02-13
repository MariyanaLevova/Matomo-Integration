'use strict';

foodMeApp.controller('DropDownMenuController',
    function DropDownMenuController($scope) {
		
   $scope.options = ['Option A', 'Option B', 'Option C','Option D'];
   $scope.dropDownSelect = function() {
		trackDropDownSelection($scope.selectedValue);
   }
  
});