'use strict';

var shoutoutApp = angular.module('shoutoutApp');

shoutoutApp.controller('LandingCtrl', function($scope, $rootScope, $state, $log, Restangular) {
	var messageApi = Restangular.one('message');
	messageApi.get().then(function(message) {
		$rootScope.messageData = message;
	});
});