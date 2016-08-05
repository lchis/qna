qna.controller('MainController', function($scope, $http, AuthService, PARAMS){
	$scope.questions = {};
	$scope.user = AuthService.currentUser;

	//$scope.isOwner()

	$http.get(PARAMS.PATH + '.infinity.json').then(
		function successCallback(response){
			$scope.questions = response.data;
		}, function errorCallback(response){

		}
	);
});