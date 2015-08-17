'use strict';

angular.module('psDashboard').directive('psWidgetBody',
	['$compile', '$modal',
		function($compile, $modal){
			return {
				templateUrl: 'ext-modules/psDashboard/psWidgetBodyTemplate.html',
				link: function(scope, element, attrs) {
					var newElement = angular.element(scope.item.template);
					element.append(newElement);
					$compile(newElement)(scope);

					scope.close = function() {
						scope.widgets.splice(scope.widgets.indexOf(scope.item), 1);
					};

					scope.settings = function() {
						var options = {
							templateUrl: scope.item.widgetSettings.templateUrl,
							controller: scope.item.widgetSettings.controller,
							scope: scope
						};
						$modal.open(options);
					};

					scope.iconClicked = function() {
						//This empty function body is on purpose!
						//It allows angular to handle events for icons that are tapped
						//when the user is on a mobile device. It prevents the widget from
						//intercepting the events. Without this...tapping icons would not work.
					};
				}
			};
		}
	]
);