angular.module('photofin').service('mainSvc', function( $http){

this.getItems = function () {
    return $http({
      url: '/api/products',
      method: 'GET'
})
.then(function(response) {
    return response;
});
};
});
