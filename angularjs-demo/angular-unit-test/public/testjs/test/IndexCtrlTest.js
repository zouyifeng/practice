//控制器
describe('To test controller of home page',function(){
	describe('To test controller of indexControl',function(){
		var $scope;
		beforeEach(module('app'));
		beforeEach(inject(function($rootScope,$controller){
			$scope = $rootScope.$new();
			$controller('indexCtrl',{$scope:$scope});
		}));
		it('To test object username is none or not',function(){
			expect($scope.user.name).not.toBeNull();
		});
		it('To test object userage is legal or not',function(){
			expect($scope.user.age).toMatch(/^[1-9][0-9]{0,2}/);
		});
		it('To test sum function',function () {
			expect($scope.testSum(1,2)).toBe(3);
		});
	});

});

//指令
describe("To test directive",function(){
	var $compile;
	var $rootScope;
	beforeEach(module('app'));

	beforeEach(inject(function(_$compile_,_$rootScope_){
		$compile = _$compile_;
		$rootScope = _$rootScope_;
	}));
	it('To Test directive GreatEye',function(){
		var element = $compile('<aGreateEye></aGreateEye>')($rootScope);
		$rootScope.$digest();
		expect(element.html()).toContain("a");
	});
});

//过滤器 
describe('To test filter',function(){
	beforeEach(module('app'));
	describe('interpolate',function(){
		beforeEach(module(function($provide){
			$provide.value('version','TEST_VER');
			// $provide.value('str','2015-12-18 08:05:16');
		}));
		it("should replace with VERSION",inject(function(interpolateFilter){
			expect(interpolateFilter('before %VERSION% after')).toEqual('before TEST_VER after');
		}));
		it("should replace takeEndTime",inject(function(takeEndTimeFilter){
			expect(takeEndTimeFilter('2015-12-18 08:05:16')).toEqual('08:05:16');
		}));
	});
});
