'use strict';

var shoutoutApp = angular.module('shoutoutApp');

shoutoutApp.controller('ContactsCtrl', function($scope, $state, $log) {
	$scope.allSelected = false;
	
	$scope.contacts = [
		{name: "alon", email: "alonrk@gmail.com", selected: true},
		{name: "alon", email: "alonrk@gmail.com", selected: true},
		{name: "alon", email: "alonrk@gmail.com", selected: false},
		{name: "alon", email: "alonrk@gmail.com", selected: true},
		{name: "alon", email: "alonrk@gmail.com", selected: true},
		{name: "alon", email: "alonrk@gmail.com", selected: false},
		{name: "alon", email: "alonrk@gmail.com", selected: true},
		{name: "alon", email: "alonrk@gmail.com", selected: true},
		{name: "alon", email: "alonrk@gmail.com", selected: true},
		{name: "alon", email: "alonrk@gmail.com", selected: true},
		{name: "yuval", email: "yuvala@wix.com", selected: false}
	];
	
	$scope.selectAll = function() {
		$scope.allSelected = !$scope.allSelected;
		
		$scope.contacts.forEach(function(contact) {
			contact.selected = $scope.allSelected;
		});
	};
	
	$scope.addContacts = function() {
		$log.log('Adding contacts: ' + $scope.addedContacts);
	};
	
	$scope.prev = function() {
		$state.go('choose-template');
	};
	
	$scope.next = function() {
		$state.go('send');
	};
});


shoutoutApp.controller('PaginationCtrl', function($scope) {
	$scope.totalContacts = 64;
  	$scope.currentPage = 4;
  	$scope.maxSize = 5;
  
  	$scope.setPage = function (pageNo) {
    	$scope.currentPage = pageNo;
  	};
});
