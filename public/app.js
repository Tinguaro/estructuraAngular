var mainApplicationModuleName = 'nameapp'

var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngRoute', 'mainModule']);
mainApplicationModule.config(['$locationProvider',
	function($locationProvider){
		$locationProvider.hashPrefix('!');
	}
]);

angular.element(document).ready(function() {
	angular.bootstrap(document, [mainApplicationModuleName]);
});