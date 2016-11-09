angular.module('myApp',[]).
	controller('myController',function($scope){
		$scope.storedString = '';
		$scope.keyInfo = {};
		$scope.keyStrokes = [];
		$scope.keyState = 'not pressed';
		$scope.keyPressed = function(event){
			if(event.keyCode == 13){
				var element = angular.element(event.target);
				$scope.storedString = element.val();
				element.val('');
				$scope.keyInfo.keyCode = event.keyCode;
				$scope.keyState = 'enter pressed';
			}else{
				$scope.keyInfo.keyCode = event.keyCode;
				$scope.keyStrokes.push(event.keyCode);
				$scope.keyState = 'not pressed';
			}
		};
	});