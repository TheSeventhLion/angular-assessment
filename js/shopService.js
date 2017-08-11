angular.module('app').service('shopService', function ($http){


     this.getProducts = function(id) {
       if (id) {
         return $http({
           method: 'GET',
           url: 'https://practiceapi.devmountain.com/products' + id
         }).then(function(response){
           return response.data
         })
       } else {
         return $http({
           method: 'GET',
           url: 'https://practiceapi.devmountain.com/products',
         }).then(function(response){
           return response.data
         })
       }
     }
   })
   