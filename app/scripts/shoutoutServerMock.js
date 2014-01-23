'use strict';

var myAppDev = angular.module('shoutoutServerMock', ['ngMockE2E']);

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
	
	function getUrlParam( url, param )
	{
	  var params = url.substr(url.indexOf("?")+1);
	  var sval = "";
	  params = params.split("&");
	    // split param and value into individual pieces
	    for (var i=0; i<params.length; i++)
	       {
	         var temp = params[i].split("=");
	         if ( [temp[0]] == param ) { sval = temp[1]; }
	       }
	  return sval;
	}
 
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
		// dummy id
		var id = Math.round(+new Date()/1000).toString();
		data.id = id;
		sessionStorage[id] = data;
		
		console.log('sessionStorage:' + sessionStorage[id]);
		
		return [200, {id: id}, {}];
	});
	
	$httpBackend.whenGET(/message\?id=.*/).respond(function(method, url, data) {
		var id = getUrlParam(url, 'id');
		if (!id)
			return [404];
		
		console.log('sessionStorage:' + sessionStorage[id]);
		
		return [200, sessionStorage[id], {}];
	});
 
	//------------------------ otherwise -----------------------------
  	$httpBackend.whenGET(/views*/).passThrough();
});