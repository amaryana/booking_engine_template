angular.module('photofin').controller('mainCtrl', function($scope, $http, mainSvc){

mainSvc.getItems()
  .then(function(items) {
    $scope.items = items;
  });





});
