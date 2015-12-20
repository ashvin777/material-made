/**

 Created By : root
 Creation Date : Sun Dec 20 2015 16:47:20 GMT+0530 (IST)
 Controller Name : left
 View Name : left.html
 Description : No description available
 
 */

describe('Unit: left', function() {

    beforeEach(module('mm.app'));

    var ctrl, scope, rootScope, stateParams, log, q;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('left', {
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