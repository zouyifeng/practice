
angular.module('myApp',[]).
	controller('myController',function($scope,$sce){
		$scope.trustSrc = function(src) {
		    return $sce.trustAsResourceUrl(src);
		 }
		$scope.smallTitleBar = 'http://localhost:8088/small_title.html';
		$scope.largeTitleBar = 'http://localhost:8088/large_title.html';
		$scope.titleBar = 'http://localhost:8088/large_title.html';
	});
