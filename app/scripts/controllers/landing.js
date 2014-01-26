'use strict';

var shoutoutApp = angular.module('shoutoutApp');

shoutoutApp.controller('LandingCtrl', function($scope, $rootScope, $state, $stateParams, $log, Restangular) {
	var messageApi = Restangular.one('message');
	var params = $stateParams;
	$log.log("params: " + params);
	
	messageApi.get({id: params.id}).then(function(message) {
		$rootScope.messageData = message;
		
		if ($rootScope.messageData.youtubeId)
		{
			angular.element().ready(function() {
				document.getElementById('youtubeDiv').innerHTML = "<iframe id='ytplayer' src='https://www.youtube.com/v/" + $rootScope.messageData.youtubeId + "' width='100%' height='600'/>";
			});
		}
	});
});