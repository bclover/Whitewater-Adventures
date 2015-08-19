'use strict';

angular.module('psMenu').directive('psMenuItem', function() {
    return {
        require: '^psMenu',
        transclude: true,
        templateUrl: 'ext-modules/psMenu/psMenuItemTemplate.html',
        scope: {
            label: '@',
            icon: '@',
            route: '@'
        },
        link: function(scope, el, attr, ctrl) {

            scope.isActive = function(){
                return el === ctrl.getActiveElement();
            };

            scope.isVertical = function(){
                return ctrl.isVertical() || el.parents('.ps-subitem-section').length > 0;
            };

            el.on('click', function(evt){
                evt.stopPropagation();
                evt.preventDefault();
                scope.$apply(function(){
                    ctrl.setActiveElement(el);
                    ctrl.setRoute(scope.route);
                });
            });

        }
    };
});