'use strict';

/**

 Created By : root
 Creation Date : Sun Dec 20 2015 17:57:04 GMT+0530 (IST)
 Directive Name : uiDroppable
 View Name : ui-droppable.template.html
 Description : No description available

 */
angular.module('mm.directives')

.directive('uiDroppable', [

    function() {
        return {
            restrict: 'EAC',
            // templateUrl: 'src/directives/ui-droppable/ui-droppable.template.html',
            link: function(scope, element, attrs, controller) {
              $(element).droppable({
                drop : function(event,ui){
                  var el = $(ui.draggable).find(".component").clone().removeClass("component").show();
                  $(event.target).append(el);
                }
              });
            }
        };
    }
]);
