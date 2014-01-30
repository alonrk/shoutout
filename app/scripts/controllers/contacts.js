'use strict';

var shoutoutApp = angular.module('shoutoutApp');

shoutoutApp.controller('ContactsCtrl', function($scope, $rootScope, $state, $log, Restangular) {
	$rootScope.allSelected = false;
	var _skip = 0;
	var _limit = 10;
	var _total = -1;
	var _loading = false;
	
	var contactsApi = Restangular.one("contacts");
	
	if ($rootScope.contacts === undefined)
	{
		$rootScope.contacts = [];
		getContacts();
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
	
	$scope.onContactsScroll = function(event, isEnd) {
		if (_skip >= _total || _loading)
			return;
		
		var y = event.target.scrollTop;
		var height = event.target.clientHeight;
		
		if (height - y < 50)
		{
			$log.log('get next page');
			getContacts();
		}
	};
	
	$scope.prev = function() {
		$state.go('choose-style');
	};
	
	$scope.next = function() {
		$state.go('send');
	};
	
	function getContacts() {
		_loading = true;
		contactsApi.get({skip: _skip, limit: _limit}).then(function(result) {
			$rootScope.contacts = $rootScope.contacts.concat(result.contacts); 
			_skip += _limit;
			_total = result.total;
			_loading = false;
		});
	}
});


shoutoutApp.controller('PaginationCtrl', function($scope) {
	$scope.totalContacts = 64;
  	$scope.currentPage = 4;
  	$scope.maxSize = 5;
  
  	$scope.setPage = function (pageNo) {
    	$scope.currentPage = pageNo;
  	};
});
