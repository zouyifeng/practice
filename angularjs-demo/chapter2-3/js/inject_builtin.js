var myMod = angular.module('myApp',[]);
myMod.controller('controllerA',['$scope','$window',function($scope,$window){
	$scope.message = "my module has loaded";
	$window.alert($scope.message);
}])