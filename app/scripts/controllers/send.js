'use strict';

var shoutoutApp = angular.module('shoutoutApp');

shoutoutApp.controller('SendCtrl', function ($scope, $rootScope, $log, $state, $stateParams, Restangular) {
	$scope.senderName = 'Alon Rousso-Katz';
	
	$scope.send = function() {
        var query = parseQuery(document.location.search);
        $rootScope.messageData.siteUrl = query.siteUrl;

		var messageApi = Restangular.one('message');
		messageApi.post('', $rootScope.messageData).then(function(response) {
			$rootScope.messageId = response.id;
			$rootScope.shoutoutUrl = 'http://' + window.location.host + '/#/landing?id=' + response.id;
		});
		
		verifyContacts();
		
		$state.go('complete');
	};
	
	$scope.prev = function() {
		$state.go('contacts');
	};
	
	//----------------------------------------------
	function verifyContacts() {
		var invalidEmails = [];
		$rootScope.selectedContacts = 0;
		$rootScope.validEmails = 0;
		
		$rootScope.contacts.forEach(function(contact) {
			if (contact.selected)
			{
				$rootScope.selectedContacts++;
				if (validEmail(contact.email))
					$rootScope.validEmails++;
				else
					invalidEmails.push(contact.email);
			}
		});
		
		if (invalidEmails.length > 0)
		{
			$rootScope.invalidEmails = invalidEmails.join(', ');
		}
	}

    function parseQuery(qstr) {
        var query = {};
        var params = qstr.split('&');
        params.forEach(function(param) {
            var kv = param.split('=');
            query[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1]);
        });

        return query;
    }
	
	function validEmail(email) {
	    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);		
	}
});
