'use strict';

var shoutoutApp = angular.module('shoutoutApp');

shoutoutApp.controller('CompleteCtrl', function($scope, $rootScope, $state, $log) {
	$scope.startOver = function() {
		$rootScope.messageData = null;
		$state.go('message');
	};
});