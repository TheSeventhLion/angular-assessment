angular.module('app')
.directive('logoDirective', function() {
  return {
    templateUrl: "views/logo.html",
    restrict: 'E',
  }
});
