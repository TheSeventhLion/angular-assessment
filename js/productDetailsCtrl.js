angular.module('app').controller('productDetailsCtrl', function ($scope, $stateParams, shopService) {
     shopService.getProducts($stateParams.id).then(function (data) {
       $scope.product = data
     })
    })
    