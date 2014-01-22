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
      			$scope.stepClass[0] = "step bold";
      			break;
      		case 'choose-template':
      			$scope.stepClass[1] = "step bold";
      			break;
      		case 'contacts':
      			$scope.stepClass[2] = "step bold";
      			break;
      		case 'send':
      		case 'complete':
      			$scope.stepClass[3] = "step bold";
      			break;
      	}
      	
      	$scope.setState = function(state) {
      		$state.go(state);
      	};
      }
    };
  });
