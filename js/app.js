/**
 * Created by praveen on 12.09.15.
 */

angular.module('MohitApp', ['ngMaterial', 'ngRoute', 'angular-timeline']);

// Theme setup
angular.module('MohitApp').config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .accentPalette('deep-orange');
});

// Constants setup
angular.module('MohitApp').constant('config', {
    baseUrl : 'http://pkp.io',  // Baseurl to load site resources
    loadDelay : 250             // Min. delay before sending data load requests
});

// Route setup
angular.module('MohitApp').config(function($routeProvider) {
    $routeProvider
        .when('/about',{
            templateUrl : 'view/intro.html',
            controller  : 'IntroCtrl'
        })
        .when('/academics',{
            templateUrl : 'view/academics.html',
            controller  : 'AcadCtrl'
        })
        .when('/work',{
            templateUrl : 'view/work.html',
            controller  : 'WorkCtrl'
        })
        .when('/projects',{
            templateUrl : 'view/project.html',
            controller  : 'ProjectCtrl'
        })
    
});

angular.module('MohitApp').controller('AppCtrl', function($scope) {
    $scope.menuItems = [
        {
            class: "fa-user",
            text: "About",
            url: "#/about"
        },
        {
            class: "fa-book",
            text: "Blog",
            url: "#/blog"
        },
        {
            class: "fa-code",
            text: "Projects",
            url: "#/projects"
        },
        {
            class: "fa-trophy",
            text: "Achievments/Exp",
            url: "#/achievments"
        }
    ];
});
