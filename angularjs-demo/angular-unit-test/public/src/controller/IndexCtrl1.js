'use strict';
angular.module('app1',[])
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
			template:'<h1>xa</h1>'
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
