/**

 Created By : root
 Creation Date : Sun Dec 20 2015 16:47:36 GMT+0530 (IST)
 Controller Name : center
 View Name : center.html
 Description : No description available
 
 */

describe('Unit: center', function() {

    beforeEach(module('mm.app'));

    var ctrl, scope, rootScope, stateParams, log, q;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('center', {
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