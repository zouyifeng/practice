angular.module('myApp',[])
	.filter('censor',function(){
		return function(input,replacement){
			var cWords = ['bad','evil','dark'];
			var out = input;
			for(var i=0;i<cWords.length;i++){
				out = out.replace(cWords[i],replacement);
			}
			return out;
		};
	})
	.controller('myController',['$scope','censorFilter',function($scope,myCensorFilter){
		$scope.censorText ="***";
		$scope.phrase = "This is bad phrase";
		$scope.txt = "click to filter out dark and evil";
		$scope.filterText = function(){
			$scope.txt = myCensorFilter($scope.txt,'<<censored>>');
		};
	}]);