'use strict';

var shoutoutApp = angular.module('shoutoutApp');

shoutoutApp.controller('MessageCtrl', function ($scope, $log, $state, $stateParams, $rootScope) {
	if (!$rootScope.messageData)
	{
		$rootScope.messageData = {
			text: '',
			imageUrl: '',
			videoUrl: '',
			linkUrl: ''
		};
	}
	
	$scope.imageInput = 'none';
	$scope.videoInput = 'none';
	$scope.linkInput = 'none';
		
	// attach picture - TODO: change to media gallery
	$scope.attachPhoto = function() {
	  filepicker.setKey('ATmAcdaDPTsytAm6ffOuwz');
      filepicker.pick({
          mimetypes: ['image/*'],
          container: 'modal',
          services:['COMPUTER', 'FACEBOOK', 'INSTAGRAM', 'WEBCAM']
        },
        function(inkBlob){
          $scope.imageInput = 'added';
          $log.info('attachePicture: ' + inkBlob.url);
          $scope.messageData.imageUrl = inkBlob.url;
          $scope.$digest();
        },
        function(FPError){
          //console.log(FPError.toString());
          $log.info('attachPicture: ' + FPError.toString());
        });
	};

	// attach video
	$scope.attachVideo = function() {
		
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
});
