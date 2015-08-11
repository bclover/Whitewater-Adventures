'use strict';

var app=angular.module('app', ['ngRoute', 'psFramework']);

app.constant('Events', {
		MENU_ITEM_SELECTED:      'ps-menu-item-selected-event',
		MENU_ORIENTATION_CHANGE: 'ps-menu-orientation-change-event',
		RESIZE_FRAMEWORK:        'resize.psFramework',
		SHOW_MENU:               'ps-menu-show'
	}
);