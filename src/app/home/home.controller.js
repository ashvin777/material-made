'use strict';

/**

 Created By : root
 Creation Date : Mon Dec 21 2015 21:53:11 GMT+0530 (IST)
 Controller Name : home
 View Name : home.html
 Description : No description available
 
 */
angular.module('mm.app')

.controller('home', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "home";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);