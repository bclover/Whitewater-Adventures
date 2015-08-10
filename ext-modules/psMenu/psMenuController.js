"use strict";

angular.module('psMenu').controller('psMenuController',
	['$rootScope', '$scope', 'Events',
		function($rootScope, $scope, Events){

			//console.log('psMenuController instantiated...');

			$scope.isVertical = true;
			$scope.openMenuScope = null;
			$scope.showMenu = true;
			$scope.allowHorizontalToggle = true;

			//EVENT HANDLERS
			$scope.$on(Events.SHOW_MENU, function(evt, data){
				$scope.showMenu = data.show;
				$scope.isVertical = data.isVertical;
				$scope.allowHorizontalToggle = data.allowHorizontalToggle;
			});

			this.getActiveElement = function(){
				return $scope.activeElement;
			};

			this.setActiveElement = function(el){
				$scope.activeElement = el;
			};

			this.isVertical = function() {
				return $scope.isVertical;
			};

			this.setRoute = function(route){
				$rootScope.$broadcast(Events.MENU_ITEM_SELECTED, { route: route });
			};

			this.setOpenMenuScope = function(scope){
				$scope.openMenuScope = scope;
			};

			$scope.toggleMenuOrientation = function(){

				//close any open popup menus when the orientation changes
				if($scope.openMenuScope){
					$scope.openMenuScope.closeMenu();
				}
				$scope.isVertical = !$scope.isVertical;
				$rootScope.$broadcast(Events.MENU_ORIENTATION_CHANGE, { isMenuVertical: $scope.isVertical });
			};

			//capture click event anywhere outside of the popup menu and close the popup
			angular.element(document).bind('click', function(e){
				if($scope.openMenuScope && !$scope.isVertical){
					if($(e.target).parent().hasClass('ps-selectable-item')){
						return;
					}else{
						$scope.$apply(function() {
							$scope.openMenuScope.closeMenu();
						});
						e.preventDefault();
						e.stopPropagation();
					}
				}
			});
		}
	]
);
