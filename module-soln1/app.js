(function () {
'use strict';

angular.module('myapp', [])
.controller('myct', myct);

myct.$inject = ['$scope'];
function myct($scope) {
  $scope.menu = "";
  $scope.info = "";
  $scope.label = "";
  
  
  $scope.clear = function () {
	  
	  $scope.info="";
  };
  
  $scope.checkmenu = function () {
   
	var sep =  ',';
	 var arrofstring = $scope.menu.split(sep);
	
	//alert(arrofstring);
	var arrlen = arrofstring.length;
	//alert(arrlen)
	if(arrlen < 0)
	{
		$scope.info = "Please enter data first"
	}
	else if(arrlen >= 1  && arrlen < 4)
	{
		$scope.info = "Enjoy!!!";
		$scope.label = "success";
	}
	else
	{
		$scope.info = "Too Much!!!";
		$scope.label = "danger"; 
	} 
  };
}

})();
