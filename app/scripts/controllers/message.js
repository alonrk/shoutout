'use strict';

var shoutoutApp = angular.module('shoutoutApp');

shoutoutApp.controller('MessageCtrl', function ($scope, $log, $state, $stateParams) {
	this.messageData = {
		text: '',
		imageUrl: '',
		videoUrl: '',
		linkUrl: ''
	};
	
	// attach picture - TODO: change to media gallery
	this.attachPicture = function() {
	  filepicker.setKey('ATmAcdaDPTsytAm6ffOuwz');
      filepicker.pick({
          mimetypes: ['image/*'],
          container: 'modal',
          services:['COMPUTER', 'FACEBOOK', 'INSTAGRAM', 'WEBCAM']
        },
        function(inkBlob){
          $log.info('attachePicture: ' + inkBlob.url);
          $scope.messageData.imageUrl = inkBlob.url;
          $scope.$digest();
        },
        function(FPError){
          //console.log(FPError.toString());
          $log.info('attachPicture: ' + FPError.toString());
        });
	};
	
	this.next = function() {
		$state.go('template');
	}
});
