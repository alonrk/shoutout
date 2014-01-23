'use strict';

var shoutoutApp = angular.module('shoutoutApp');

shoutoutApp.controller('LandingCtrl', function($scope, $rootScope, $state, $stateParams, $log, Restangular) {
	var messageApi = Restangular.one('message');
	var params = $stateParams;
	$log.log("params: " + params);
	
	messageApi.get({id: params.id}).then(function(message) {
		$rootScope.messageData = message;
	});
});