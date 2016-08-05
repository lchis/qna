qna.directive('selected', function(){
	return {
		restrict: "E",
      	replace: true,
      	scope: {
			selected: '='
		},
		templateUrl: 'js/directives/selected.html',
	}
});	