'use strict';

var shoutoutApp = angular.module('shoutoutApp');

shoutoutApp.controller('LandingCtrl', function($scope, $rootScope, $state, $stateParams, $sce, Restangular) {
	var messageApi = Restangular.one('message');
	var params = $stateParams;
	
	messageApi.get({id: params.id}).then(function(message) {
		$rootScope.messageData = message;
		
		if ($rootScope.messageData && $rootScope.messageData.youtubeId)
			$scope.youtubeIFrame = $sce.trustAsHtml("<iframe id='ytplayer' src='https://www.youtube.com/v/" + $rootScope.messageData.youtubeId + "' style='border: 0'/>");
	});
});