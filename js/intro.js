/**
 * Created by praveen on 13.09.15.
 */

angular.module('MohitApp').controller('IntroCtrl', function($scope, $timeout, config, $http) {
    $scope.messages = null;
    $scope.ready = 0;

    // Get projects info
    $scope.loadData = function(){
        var req = {
            method: 'GET',
            url: 'data/intro.json'
        };
        $http(req)
            .then(
            function (response) { // Success callback
                $scope.messages = response.data;
                $scope.ready = 1;
            },
            function (response) { //Error callback
                console.log(response.toString());
            }
        );
    };

    // Delayed call to avoid navbar freeze on close
    $timeout($scope.loadData, config.loadDelay);
});