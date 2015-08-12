'use strict';

angular.module('app').directive('wwaDashboard',
	[
		function(){
			return {
				scope: {},
				template: '<ps-dashboard></ps-dashboard></h1>',
				link: function(scope){

					scope.title = 'Dashboard';

					scope.gridsterOpts={
						columns: 12,
						margins: [20, 20],
						outerMargin: false,
						pushing: true,
						floating: true,
						swapping: false
					};

					scope.widgets=[
						{
							title: 'First',
							sizeX: 4,
							sizeY: 4,
							minSizeX: 4,
							minSizeY: 4,
							row: 0,
							col: 0,
							template: '<wwa-temperature></wwa-temperature>',
							widgetSettings: {
								id: 1000
							}
						},
						{
							title: 'Second',
							sizeX: 5,
							sizeY: 4,
							minSizeX: 5,
							minSizeY: 4,
							row: 0,
							col: 5,
							template: '<wwa-employee></wwa-employee>',
							widgetSettings: {
								id: 5001
							}
						},
						{
							title: 'Third',
							sizeX: 6,
							sizeY: 4,
							minSizeX: 6,
							minSizeY: 4,
							row: 5,
							col: 5,
							template: '<wwa-inventory></wwa-inventory>',
							widgetSettings: {
								id: 1002
							}
						}
					];
				}
			};
		}
	]
);