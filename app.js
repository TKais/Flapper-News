var app = angular.module('flapperNews', []);

app.controller('MainCtrl', ['$scope', function($scope){
	// scope serves as the bridge between Angular controllers and Angular templates. If you want something to be accessible in the template (function or variable), bind it to scope
	$scope.posts = [
	'post 1',
	'post 2',
	'post 3',
	'post 4',
	'post 5'
	]
}]);