'use strict';
angular.module('app',[])
	.controller('indexCtrl',['$scope',function($scope){
		$scope.user={
			name: 'huhu',
			age: '13'
		};

		$scope.testSum = function(a,b){
			return a + b;
		}
	}])
	.directive('aGreateEye',function(){
		return{
			restrict:'E',
			replace:true,
			template:'<h1>a</h1>'
		}
	})
	.filter('interpolate',['version',function(version){
		return function(text){
			return String(text).replace(/\%VERSION\%/mg,version);
		}
	}])
	.filter('takeEndTime',function(){
        return function(str){
            return str.substr(-8);
        }
    });
