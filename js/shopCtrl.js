angular.module('app').controller('shopCtrl', function ($scope, shopService) {

     shopService.getProducts().then(function (data) {
       $scope.products = data

     //   $scope.test = 'connected shopCtrl'
     })
   })
   