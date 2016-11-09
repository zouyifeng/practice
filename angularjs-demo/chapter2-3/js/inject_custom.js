var myMod = angular.module('myMod',[]);
myMod.value('modMsg','hello from my module');
myMod.controller('controllerB',['$scope','modMsg',function($scope,msg){
	$scope.message = msg;
}]);

var myApp = angular.module('myApp',['myMod']);
myApp.value('appMsg','hello from my app');
myApp.controller('controllerA',['$scope','appMsg',function($scope,msg){
	$scope.message = msg;
}]);