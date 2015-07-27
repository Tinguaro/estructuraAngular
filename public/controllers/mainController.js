function MainController($scope){
	$scope.s = {
		"saludo" : "HOLA"
	}

	$scope.e = {
		"saludo" : "HELLO"
	}

	$scope.template = {
		"words" : {}
	}
	$scope.template.words = $scope.s;


}