'use strict';

angular.module('shoutoutApp')
  .directive('soRuler', function () {
    return {
      templateUrl: 'views/ruler.html',
      controller: function($scope, $state, $log) {
      	$log.log('state: ' + $state.current.name);
      	$scope.stepClass = [
      		'step', 'step', 'step', 'step'
      	];
      	
      	switch ($state.current.name)
      	{
      		case 'message':
      			$scope.stepClass[0] = "step current";
      			break;
      		case 'choose-style':
      			$scope.stepClass[1] = "step current";
      			break;
      		case 'contacts':
      			$scope.stepClass[2] = "step current";
      			break;
      		case 'send':
      		case 'complete':
      			$scope.stepClass[3] = "step current";
      			break;
      	}
      	
      	$scope.setState = function(state) {
      		$state.go(state);
      	};
      }
    };
  });
