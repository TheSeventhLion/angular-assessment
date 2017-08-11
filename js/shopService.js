angular.module('app').service('shopService', function ($http){


     this.getProducts = function(id) {
       if (id) {
         return $http({
           method: 'GET',
           url: 'http://practiceapi.devmounta.in/products/' + id
         }).then(function(response){
           return response.data
         })
       } else {
         return $http({
           method: 'GET',
           url: 'http://practiceapi.devmounta.in/products',
         }).then(function(response){
           return response.data
         })
       }
     }
   })
   