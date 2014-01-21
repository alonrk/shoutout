'use strict';

var myAppDev = angular.module('shoutoutApi', ['shoutoutApp', 'ngMockE2E']);

myAppDev.run(function($httpBackend) {
  var contacts = [
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
 
  $httpBackend.whenGET(/views*/).passThrough();
});