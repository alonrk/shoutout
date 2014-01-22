'use strict';

var shoutoutApp = angular.module('shoutoutApp');

shoutoutApp.controller('TemplateCtrl', function ($scope, $log, $state) {
	$scope.prev = function() {
		$state.go('message');
	};

	$scope.next = function() {
		$state.go('contacts');
	};
});
