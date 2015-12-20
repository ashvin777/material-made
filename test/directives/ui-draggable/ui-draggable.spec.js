/**

 Created By : root
 Creation Date : Sun Dec 20 2015 17:31:51 GMT+0530 (IST)
 Directive Name : ui-draggable
 Description : No description available
 
 */

 describe('Unit: ui-draggable', function() {

  var compile, rootScope;

  beforeEach(module('mm.directives'));
  beforeEach(module('src/directives/ui-draggable/ui-draggable.template.html'));

  beforeEach(inject(function($compile, $rootScope) {
    compile = $compile;
    rootScope = $rootScope;
  }));

  it('Replaces the element with the appropriate content', function() {
    var element = compile("<ui-draggable></ui-draggable>")(rootScope);
    rootScope.$digest();
    expect(element.html()).toContain("this is the directive");
  });


});