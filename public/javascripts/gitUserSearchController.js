githubUserSearch.controller('GitUserSearchController', function($scope, $resource) {

  var searchResource = $resource('https://api.github.com/search/users');

  $scope.doSearch = function(){
    $scope.searchResult = searchResource.get({
      q: $scope.searchTerm


    });
  };

  $scope.items = [{
    name:"Phil",
    age:100
  },
  {
    name:"paul",
    age:120
  }]
});