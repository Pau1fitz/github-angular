var github = angular.module('githubApp', ['ngResource']);

github.controller('githubController', function($scope, $resource){

var searchResource = $resource('https://api.github.com/search/users');

  $scope.searchResult = searchResource.get(
    { q: $scope.searchTerm }
  );
  console.log($scope.searchResult)
});