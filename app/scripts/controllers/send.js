'use strict';

var shoutoutApp = angular.module('shoutoutApp');

shoutoutApp.controller('SendCtrl', function ($scope, $rootScope, $log, $state, Restangular) {
	$scope.senderName = "Alon Rousso-Katz";
	
	$scope.send = function() {
		var messageApi = Restangular.one('message');
		messageApi.post('', $rootScope.messageData).then(function(response) {
			$rootScope.messageId = response.id;
		});
		
		$state.go('complete');
	};
	
	$scope.prev = function() {
		$state.go('contacts');
	};
});
