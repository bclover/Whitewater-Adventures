'use strict';

angular.module('app').directive('wwaDashboard',
	[
		function(){
			return {
				scope: {},
				template: '<ps-dashboard></ps-dashboard></h1>',
				link: function(scope){

					scope.title = 'Dashboard';

					scope.gridsterOpts = {
						columns: 12,
						margins: [20, 20],
						outerMargin: false,
						pushing: true,
						floating: true,
						swapping: false
					};

					scope.widgetDefinitions = [
						{
							title: 'Temperature',
							settings: {
								sizeX: 4,
								sizeY: 4,
								minSizeX: 4,
								minSizeY: 4,
								template: '<wwa-temperature></wwa-temperature>',
								widgetSettings: {
									id: 1000,
									templateUrl: 'app/dialogs/wwwSelectLocationTemplate.html',
									controller: 'wwaSelectLocationController'
								}
							}
						},
						{
							title: 'Inventory',
							settings: {
								sizeX: 6,
								sizeY: 4,
								minSizeX: 6,
								minSizeY: 4,
								template: '<wwa-inventory></wwa-inventory>',
								widgetSettings: {
									id: 1002,
									templateUrl: 'app/dialogs/wwwSelectLocationTemplate.html',
									controller: 'wwaSelectLocationController'
								}
							}
						},
						{
							title: 'Employee',
							settings: {
								sizeX: 5,
								sizeY: 4,
								minSizeX: 5,
								minSizeY: 4,
								template: '<wwa-employee></wwa-employee>',
								widgetSettings: {
									id: 5001,
									templateUrl: 'app/dialogs/wwwSelectEmployeeTemplate.html',
									controller: 'wwaSelectEmployeeController'
								}
							}
						}
					];

					scope.widgets = [

					];
				}
			};
		}
	]
);