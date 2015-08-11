'use strict';

angular.module('psFramework').controller('psFrameworkController',
	['$location', '$rootScope', '$scope', '$timeout', '$window', 'Events',

		function($location, $rootScope, $scope, $timeout, $window, Events) {

			//console.log('psFrameworkController instantiated...');

			$scope.isMenuVisible = true;
			$scope.isMenuButtonVisible = true;
			$scope.isMenuVertical = true;

			//EVENT HANDLERS
			$scope.$on(Events.MENU_ITEM_SELECTED, function(evt, data) {
				$location.path(data.route);
				checkWidth();
				broadcastMenuState();
			});

			$($window).on(Events.RESIZE_FRAMEWORK, function() {
				$scope.$apply(function() {
					checkWidth();
					broadcastMenuState();
				});
			});

			$scope.$on('$destroy', function() {
				$($window).off(Events.RESIZE_FRAMEWORK);
			});

			$scope.$on(Events.MENU_ORIENTATION_CHANGE, function(evt, data) {
				$scope.isMenuVertical = data.isMenuVertical;
			});

			//SCOPE METHODS
			$scope.menuButtonClicked = function() {
				$scope.isMenuVisible = !$scope.isMenuVisible;
				broadcastMenuState();
			};

			//HELPER METHODS
			var broadcastMenuState = function() {
				$rootScope.$broadcast(Events.SHOW_MENU,
					{
						show: $scope.isMenuVisible,
						isVertical: $scope.isMenuVertical,
						allowHorizontalToggle: !$scope.isMenuButtonVisible
					});
			};

			var checkWidth = function() {
				var width = Math.max($($window).width(), $window.innerWidth);
				$scope.isMenuVisible = (width >= 768);
				$scope.isMenuButtonVisible = !$scope.isMenuVisible;
			};

			//TIMER
			$timeout(function(){
				checkWidth();
				broadcastMenuState();
			}, 0);
		}
	]
);
