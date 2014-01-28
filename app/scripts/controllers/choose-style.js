'use strict';

var shoutoutApp = angular.module('shoutoutApp');

shoutoutApp.controller('TemplateCtrl', function ($rootScope, $scope, $log, $state, $sce) {
	if ($rootScope.messageData && $rootScope.messageData.youtubeId)
		$scope.youtubeIFrame = $sce.trustAsHtml("<iframe id='ytplayer' src='https://www.youtube.com/embed/" + $rootScope.messageData.youtubeId + "' style='border: 0'/>");

	$scope.prev = function() {
		$state.go('message');
	};

	$scope.next = function() {
		$state.go('contacts');
	};
});
