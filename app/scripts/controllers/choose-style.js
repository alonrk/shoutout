'use strict';

var shoutoutApp = angular.module('shoutoutApp');

shoutoutApp.controller('TemplateCtrl', function ($rootScope, $scope, $log, $state) {
	if ($rootScope.messageData)
	{
		angular.element().ready(function() {
			document.getElementById('youtubeDiv').innerHTML = "<iframe id='ytplayer' src='https://www.youtube.com/v/" + $rootScope.messageData.youtubeId + "' width='100%' height='300'/>";
		});
	}

	$scope.prev = function() {
		$state.go('message');
	};

	$scope.next = function() {
		$state.go('contacts');
	};
});
