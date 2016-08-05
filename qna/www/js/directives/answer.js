qna.directive('answer', function(){
	function AnswerController(scope){
		if(Array.isArray(scope.answer.selected)){
			scope.select = scope.answer.selected;
		} else if(scope.answer.selected){
			scope.select = [scope.answer.selected];
		} else{
			scope.select = null;
		}

	}

	return {
		restrict: "E",
      	replace: true,
      	require: '^question',
      	controller: ['$scope', AnswerController],
      	scope: {
			question: '=',	/* Question Node that this answer belongs to */
			answer: '=',	/* Answer Node */
			key: '=',		/* Answer node name (key) */
			params: '='		/* params holding choice object to hold selected answer object */
		},
		templateUrl: 'js/directives/answer.html',
		link: function(scope, element, attrs, controller){
			scope.answer.key = scope.key;			
		}
	}
});		