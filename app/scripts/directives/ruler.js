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
      		1, 2, 3, 4
      	];
      	
      	switch ($state.current.name)
      	{
      		case 'message':
      			$scope.stepClass[0] += ' ruler-current';
      			break;
      		case 'choose-style':
      			$scope.stepClass[1] += ' ruler-current';
      			$scope.stepClass[0] += ' ruler-complete';
      			$scope.stepValue[0] = '.';
      			break;
      		case 'contacts':
      			$scope.stepClass[2] += ' ruler-current';
      			$scope.stepClass[1] += ' ruler-complete';
      			$scope.stepClass[0] += ' ruler-complete';
      			$scope.stepValue[1] = '.';
      			$scope.stepValue[0] = '.';
      			break;
      		case 'send':
      		case 'complete':
      			$scope.stepClass[3] += ' ruler-current';
      			$scope.stepClass[2] += ' ruler-complete';
      			$scope.stepClass[1] += ' ruler-complete';
      			$scope.stepClass[0] += ' ruler-complete';
      			$scope.stepValue[2] = '.';
      			$scope.stepValue[1] = '.';
      			$scope.stepValue[0] = '.';
      			break;
      	}
      	
      	$scope.setState = function(state) {
      		$state.go(state);
      	};
      }
    };
  });
