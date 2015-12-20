'use strict';

/**

 Created By : root
 Creation Date : Sun Dec 20 2015 16:47:36 GMT+0530 (IST)
 Controller Name : center
 View Name : center.html
 Description : No description available
 
 */
angular.module('mm.app')

.controller('center', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "center";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);