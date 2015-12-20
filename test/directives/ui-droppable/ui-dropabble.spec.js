/**

 Created By : root
 Creation Date : Sun Dec 20 2015 17:51:04 GMT+0530 (IST)
 Directive Name : ui-dropabble
 Description : No description available
 
 */

 describe('Unit: ui-dropabble', function() {

  var compile, rootScope;

  beforeEach(module('mm.directives'));
  beforeEach(module('src/directives/ui-droppable/ui-dropabble.template.html'));

  beforeEach(inject(function($compile, $rootScope) {
    compile = $compile;
    rootScope = $rootScope;
  }));

  it('Replaces the element with the appropriate content', function() {
    var element = compile("<ui-dropabble></ui-dropabble>")(rootScope);
    rootScope.$digest();
    expect(element.html()).toContain("this is the directive");
  });


});