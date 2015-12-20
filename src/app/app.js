'use strict';

/**

 Created By : root
 Creation Date : Sun Dec 20 2015 13:45:58 GMT+0530 (IST)

 */

// init modules, module names equal to folder structure
angular.module('mm.app', []); // view controllers etc.
angular.module('mm.services', []); // services
angular.module('mm.filters', []); // filter
angular.module('mm.factories', []); // helper
angular.module('mm.directives', []); // directives

angular.module('mm.libs', ['ui.router']);

angular.module('mm', ['mm.services', 'mm.filters', 'mm.factories', 'mm.directives', 'mm.app', 'mm.libs'])

.run(function() {

})

.constant('Config', {
    constantVariables: "constantValue"
})

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state("app", {
            url: "/app",
            templateUrl: "src/app/app.html"
        })
        .state("app.home", {
            url: "/home",
            views: {
                LeftView: {
                    templateUrl: "src/app/left/left.html",
                    controller: "left"
                },
                CenterView: {
                    templateUrl: "src/app/center/center.html",
                    controller: "center"
                }
            }
        })
        //~!states!~

    $urlRouterProvider.otherwise("/app/home");
});
