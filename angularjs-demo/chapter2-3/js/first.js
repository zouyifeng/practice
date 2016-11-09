var firstApp = angular.module('firstApp',[]);
firstApp.controller('FirstController',function($scope){
	$scope.first = 'Some';
	$scope.last = 'One';
	$scope.heading = 'Message: ';
	$scope.updateMessage = function(){
		$scope.message = 'hello '+$scope.first+' '+$scope.last+'!';
	};
});                                      