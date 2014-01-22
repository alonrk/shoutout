'use strict';

angular.module('shoutoutApp', ['wixTranslations', 'ui.router', 'ngResource', 'ui.bootstrap', 'restangular'])
  .config(function ($stateProvider, $urlRouterProvider) {

	// For any unmatched url, redirect to /message
	$urlRouterProvider
		.when('/', '/message')
		.otherwise('/');

    $stateProvider
     	.state('message', {
			url: '/message',
			templateUrl: 'views/message.html',
			controller: 'MessageCtrl'
      	})
		.state('choose-template', {
      		url: '/choose-template',
      		templateUrl: 'views/choose-template.html',
      		controller: 'TemplateCtrl'
      	})
      	.state('contacts', {
      		url: '/contcats',
      		templateUrl: 'views/contacts.html',
      		controller: 'ContactsCtrl'
      	})
      	.state('send', {
      		url: '/send',
      		templateUrl: 'views/send.html',
      		controller: 'SendCtrl'
      	})
      	.state('complete', {
      		url: '/complete',
      		templateUrl: 'views/complete.html',
      		controller: 'CompleteCtrl'
      	})
      	.state('landing', {
      		url: '/landing',
      		templateUrl: 'views/landing.html',
      		controller: 'LandingCtrl'
      	});
	})
  	.run(function ($rootScope, $state, $stateParams, $log) {
	    $rootScope.$state = $state;
	    $rootScope.$stateParams = $stateParams;
	    $rootScope.$on('$stateChangeStart', function (scope, next,params) {
	      $log.log('on $routeChangeStart scope: ', scope, ' changed to ', next, 'params ', params);
	    });
	
	    $rootScope.$on('$stateChangeSuccess', function(event, to, toParams, from, fromParams) {
	      $rootScope.$previousState = from;
	      $rootScope.$previousStateParams = fromParams;
	    });
	});
