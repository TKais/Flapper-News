var app = angular.module('flapperNews', []);

app.controller('MainCtrl', ['$scope', function($scope){
	// scope serves as the bridge between Angular controllers and Angular templates. If you want something to be accessible in the template (function or variable), bind it to scope
	$scope.posts = [
	{title: 'Post 1', upvotes: 5},
	{title: 'Post 2', upvotes: 4},
	{title: 'Post 3', upvotes: 3},
	{title: 'Post 4', upvotes: 2},
	{title: 'Post 5', upvotes: 1}
	];

	$scope.addPost = function(){
		if(!$scope.title || $scope.title === ''){
			return;
		} else {		
			$scope.posts.push({title: $scope.title, link: $scope.link, upvotes:0});
			$scope.title = '';
			$scope.link = '';
		}
	};

	$scope.incrementUpvotes = function(post){
		post.upvotes += 1;
	};
}]);