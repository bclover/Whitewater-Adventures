'use strict';

angular.module('psMenu').directive('psMenu',
	['$timeout',
		function($timeout){
			return {
				restrict:    'AE',
				transclude:  true,
				controller:  'psMenuController',
				templateUrl: 'ext-modules/psMenu/psMenuTemplate.html',
				scope:       {},
				link:        function(scope, el, attribute){
					var item=el.find('.ps-selectable-item:first');
					$timeout(function(){
						item.trigger('click');
					});
				}
			};
		}]);