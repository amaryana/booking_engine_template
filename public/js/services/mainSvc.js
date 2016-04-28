angular.module('photofin').service('mainSvc', function( $http){

this.getItems = function () {
    return $http({
      url: '/api/trips',
      method: 'GET'
})
.then(function(response) {
    return response;
});
};
});
