'use strict';

var shoutoutApp = angular.module('shoutoutApp');

shoutoutApp.controller('MessageCtrl', function ($scope, $log, $state, $stateParams, $rootScope) {
	if (!$rootScope.messageData)
	{
		$rootScope.messageData = {
			text: '',
			imageUrl: '',
			youtubeId: '',
			linkUrl: ''
		};
	}
	
	if (!$rootScope.imageInput) {
		$rootScope.imageInput = 'none';
		$rootScope.videoInput = 'none';
		$rootScope.linkInput = 'none';
	}
		
	$scope.mediaLink = null;
		
	// attach picture - TODO: change to media gallery
	$scope.attachPhoto = function() {
	  filepicker.setKey('ATmAcdaDPTsytAm6ffOuwz');
      filepicker.pick({
          mimetypes: ['image/*'],
          container: 'modal',
          services:['COMPUTER', 'FACEBOOK', 'INSTAGRAM', 'WEBCAM']
        },
        function(inkBlob){
          $rootScope.imageInput = 'added';
          $log.info('attachePicture: ' + inkBlob.url);
          $rootScope.messageData.imageUrl = inkBlob.url;
          $rootScope.$digest();
        },
        function(FPError){
          //console.log(FPError.toString());
          $log.info('attachPicture: ' + FPError.toString());
        });
	};

	// attach video
	$scope.attachVideo = function() {
		$scope.mediaLink = {
			value: 'Insert YouTube link:',
			click: function() {
				var url = $scope.mediaLink.value;
				$rootScope.messageData.youtubeId = getYoutubeID(url);
				if ($rootScope.messageData.youtubeId)
				{
					$rootScope.videoInput = 'added';
					$rootScope.messageData.videoThumb = 'http://i.ytimg.com/vi/'+$rootScope.messageData.youtubeId+'/mqdefault.jpg';
				} 	
			}
		};
	};
	
	// remove photo
	$scope.removePhoto = function() {
		$scope.imageInput = 'none';
		$scope.messageData.imageUrl = '';
	};
	
	// remove video
	$scope.removeVideo = function() {
		
	};
	
	$scope.next = function() {
		$state.go('choose-style');
	};
	
	// helpers
	function getYoutubeID(url) {
  	  	var id = url.match('[\\?&]v=([^&#]*)');
    	id = id[1];
    	return id;
   	};
});
