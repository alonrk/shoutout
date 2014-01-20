var shoutoutApp = angular.module("shoutoutApp");

shoutoutApp.controller('TemplateCtrl', function ($scope, $log, $state, $stateParams) {
	$scope.prev = function() {
		$state.go('message');
	}
});
