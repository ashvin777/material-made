'use strict';

/**

 Created By : root
 Creation Date : Sun Dec 20 2015 17:31:51 GMT+0530 (IST)
 Directive Name : uiDraggable
 View Name : ui-draggable.template.html
 Description : No description available

 */
angular.module('mm.directives')

.directive('uiDraggable', [

    function() {
        return {
            restrict: 'EAC',
            //templateUrl: 'src/directives/ui-draggable/ui-draggable.template.html',
            link: function(scope, element, attrs, controller) {
              $(element).draggable({
                helper : "clone"
              });
            }
        };
    }
]);
