angular.module('app')
.directive('productDirective', function() {
  return {
    templateUrl: "views/product-tmpl.html",
    restrict: 'E',
    scope: {
      product: '='

    },
    controller: function( $scope ) {
      $scope.imageShow = false

      $scope.collapse = function () {
        if ($scope.imageShow) {
          $scope.imageShow = false
        } else {
          $scope.imageShow = true
        }
      }
    },
    link: function(scope, element, attributes ) {
    }


  }
});
