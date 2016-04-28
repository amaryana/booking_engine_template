angular.module('photofin').controller('mainCtrl', function($scope, $http, mainSvc){

mainSvc.getItems()
  .then(function(trips) {
    $scope.trips = trips.data;
  });

$scope.onClick = function(trip) {
  $scope.selected = trip;
  $scope.cart.push(trip);
};

$scope.cart = [];




});
