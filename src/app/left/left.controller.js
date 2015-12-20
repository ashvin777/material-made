'use strict';

/**

 Created By : root
 Creation Date : Sun Dec 20 2015 16:47:20 GMT+0530 (IST)
 Controller Name : left
 View Name : left.html
 Description : No description available
 
 */
angular.module('mm.app')

.controller('left', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "left";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);