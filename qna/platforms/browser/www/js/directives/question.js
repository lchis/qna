qna.directive('question', ['$http', 'PARAMS', 'AuthService' ,function($http, PARAMS, AuthService){
	//Create control to initialize scope
	function QuestionController(scope){
		//Empty choice object to hold answer, gets passed to answer directive in html
		scope.params = {choice: ''};
		scope.isOwner = scope.question.owner;
		scope.user = AuthService.currentUser;
	}

	return {
		restrict: "E",
      	replace: true,
      	controller: ['$scope', QuestionController],
      	scope: {
			question: '=',	/* Question node */
			key: '=',		/* Question node name (key) */
		},
		templateUrl: 'js/directives/question.html',
		link: function(scope, element, attrs, AuthService){
			scope.answers = scope.question.answers;

			scope.submitAnswer = function(){
				var answerUrl = PARAMS.PATH + scope.key + "/answers/" + scope.params.choice.key;

				$http({
					url: answerUrl, 
					method: 'POST',
					data: $.param({selected:scope.user}),
					headers: {'Content-Type': 'application/x-www-form-urlencoded'}
				})
				.success(function(data, status) {
		            //$scope.hello = data;
		        });
			}
		}
	}
}]);		