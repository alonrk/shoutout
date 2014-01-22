'use strict';

var myAppDev = angular.module('shoutoutApi', ['shoutoutApp', 'ngMockE2E']);

myAppDev.run(function($httpBackend) {
	//------------------------ contacts APIs -----------------------------
  	var contacts = [
		{name: 'alon', email: 'alonrk@gmail.com'},
		{name: 'alon', email: 'alonrk@gmail.com'},
		{name: 'alon', email: 'alonrk@gmail.com'},
		{name: 'alon', email: 'alonrk@gmail.com'},
		{name: 'alon', email: 'alonrk@gmail.com'},
		{name: 'alon', email: 'alonrk@gmail.com'},
		{name: 'alon', email: 'alonrk@gmail.com'},
		{name: 'alon', email: 'alonrk@gmail.com'},
		{name: 'alon', email: 'alonrk@gmail.com'},
		{name: 'alon', email: 'alonrk@gmail.com'},
		{name: 'yuval', email: 'yuvala@wix.com'}
	];
 
	// returns the current list of phones
	$httpBackend.whenGET('/contacts').respond(contacts);
 
	// adds a new phone to the phones array
	$httpBackend.whenPOST('/contacts').respond(function(method, url, data) {
  		var emails = data.split(';');
  		var newContacts = [];
  		emails.forEach(function(email) {
  			newContacts.push({
  				email: email
  			});
  		});
  	
  		return [200, newContacts, {}];
  	});

	//------------------------ msg APIs -----------------------------
	$httpBackend.whenPOST('/message').respond(function(method, url, data) {
		sessionStorage['123'] = data;
		
		console.log('sessionStorage:' + sessionStorage['123']);
		
		return [200, {}, {}];
	});
	
	$httpBackend.whenGET('/message').respond(function(method, url, data) {
		console.log('sessionStorage:' + sessionStorage['123']);
		
		return [200, sessionStorage['123'], {}];
	});
 
	//------------------------ otherwise -----------------------------
  	$httpBackend.whenGET(/views*/).passThrough();
});