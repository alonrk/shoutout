'use strict';

var shoutoutApp = angular.module('shoutoutApp');

shoutoutApp.controller('ContactsCtrl', function($scope, $rootScope, $state, $log, Restangular) {
	$rootScope.allSelected = false;
	
	var contactsApi = Restangular.one("contacts");
	
	if ($rootScope.contacts === undefined)
	{
		contactsApi.get().then(function(contacts) {
			$rootScope.contacts = contacts; 
		});
	}
	
	$scope.selectAll = function() {
		$rootScope.allSelected = !$rootScope.allSelected;
		
		$rootScope.contacts.forEach(function(contact) {
			contact.selected = $rootScope.allSelected;
		});
	};
	
	$scope.addContacts = function() {
		contactsApi.post("", $scope.contactsToAdd).then(function(newContacts) {
		  	newContacts.forEach(function(newContact) {
		  		newContact.selecetd = false;
		  		$rootScope.contacts.unshift(newContact);
		  	});
		});
	};
	
	$scope.prev = function() {
		$state.go('choose-style');
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
