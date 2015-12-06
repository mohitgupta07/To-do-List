/**
 * Created by praveen on 12.09.15.
 */

angular.module('MohitApp').controller('IntroCtrl', function($scope, $timeout, config, $http, $sce) {
    $scope.profile = null;
    $scope.ready = 0;

    // Get profile
    $scope.loadData = function(){
        var req = {
            method: 'GET',
            url: 'data/intro.json'
        };
        $http(req)
            .then(
            function (response) { // Success callback
                $scope.profile = response.data;
                $scope.ready = 1;
            },
            function (response) { //Error callback
                console.log(response.toString());
            }
        );
    };

    $scope.renderHtml = function (htmlCode) {
        return $sce.trustAsHtml(htmlCode);
    };

    // Delayed call to avoid navbar freeze on close
    $timeout($scope.loadData, config.loadDelay);
});