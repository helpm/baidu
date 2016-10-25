var app = angular.module('myApp',['ngRoute','angularCSS']);

app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/',{
		templateUrl: './home/htmls/home.html',
		// controller : 'homeCtrl'
	})
	.when('/mine',{
		templateUrl: './mine/htmls/mine.html',
		// controller : 'mineCtrl'
	})
	.when('/find',{
		templateUrl : './find/htmls/find.html',
		// controller : 'findCtrl'
	})
	.otherwise({
			redirectTo:'/'
	})
}]);