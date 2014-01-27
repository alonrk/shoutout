'use strict';

angular.module('shoutoutApp')
  .directive('soRuler', function () {
    return {
      templateUrl: 'views/ruler.html',
      controller: function($scope, $state, $log) {
      	$log.log('state: ' + $state.current.name);
      	$scope.stepClass = [
      		'ruler-step', 'ruler-step', 'ruler-step', 'ruler-step'
      	];
      	$scope.stepValue = [
      		true, true, true, true
      	];
      	
      	switch ($state.current.name)
      	{
      		case 'message':
      			$scope.stepClass[0] += ' ruler-current';
      			$scope.currentStep = 1;
      			break;
      		case 'choose-style':
      			$scope.stepClass[1] += ' ruler-current';
      			$scope.stepClass[0] += ' ruler-complete';
      			$scope.currentStep = 2;
      			break;
      		case 'contacts':
      			$scope.stepClass[2] += ' ruler-current';
      			$scope.stepClass[1] += ' ruler-complete';
      			$scope.stepClass[0] += ' ruler-complete';
      			$scope.currentStep = 3;
      			break;
      		case 'send':
      			$scope.stepClass[3] += ' ruler-current';
      			$scope.stepClass[2] += ' ruler-complete';
      			$scope.stepClass[1] += ' ruler-complete';
      			$scope.stepClass[0] += ' ruler-complete';
      			$scope.currentStep = 4;
      			break;
      		case 'complete':
      			$scope.stepClass[3] += ' ruler-complete';
      			$scope.stepClass[2] += ' ruler-complete';
      			$scope.stepClass[1] += ' ruler-complete';
      			$scope.stepClass[0] += ' ruler-complete';
      			$scope.currentStep = 5;
      			break;
      	}
      	
      	$scope.setState = function(state) {
      		$state.go(state);
      	};
      }
    };
  });
