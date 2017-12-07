// public/core.js
var moviesList = angular.module('moviesList', []);

function mainController($scope, $http) {
    $scope.formData = {};

    // when landing on the page, get all todos and show them
    $http.get('/api/movies')
        .success(function(data) {
            $scope.movies = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

}