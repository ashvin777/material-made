/**

 Created By : root
 Creation Date : Mon Dec 21 2015 21:53:11 GMT+0530 (IST)
 Controller Name : home
 View Name : home.html
 Description : No description available
 
 */

describe('Unit: home', function() {

    beforeEach(module('mm.app'));

    var ctrl, scope, rootScope, stateParams, log, q;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('home', {
            $scope: scope,
            $rootScope: rootScope,
            $stateParams: stateParams,
            $log: log,
            $q: q
        });
    }));

    it('this is the sample test', function() {
        
    });

})