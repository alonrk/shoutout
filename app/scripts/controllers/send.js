'use strict';

var shoutoutApp = angular.module('shoutoutApp');

shoutoutApp.controller('SendCtrl', function ($scope, $log, $state) {
	$scope.senderName = "Alon Rousso-Katz";
	
	$scope.prev = function() {
		$state.go('contacts');
	};
});
