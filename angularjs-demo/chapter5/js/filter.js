angular.module('myApp',[])
	.controller('myController',function($scope){
		$scope.currentDate=new Date();
		$scope.JSONObj ={title: 'myTitle'};
		$scope.word = "Superdjfoiaejofijasdlkfdhfa";
		$scope.days=['mondays','tuesday','wednesday','thursday','friday'];
	});