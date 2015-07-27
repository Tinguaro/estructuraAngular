angular.module('mainModule').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'views/home.html'
		}).
		otherwise({
			redirectTo: '/'
		});
	}

]);