/* global angular $http */

(function(){
    
    var app = angular.module('carRental', [ ]);
    
    app.controller('RentalController', ['$http', function($http){
        var cars = this;
        cars.products = [];
        
        $http({
            method: 'GET', 
            url: 'inventory.json'

            }).then(function (response) {
            console.log(response);
            cars.products = response.data;
            },function (error){
            console.log(error, 'could not retrieve data');
});

    }]);

    app.controller('RentController', function(){
       this.rentCar = function(product){
           product.rented++
           //console.log(product.rented + " " + product.carType +"'s rented")
           if (product.rented === product.totalCars){
                    product.noneLeft = true;
                }
       } 
    });
    
    app.directive('carInfo', function(){
        return{
            restrict: 'A',
            templateUrl: 'car-info.html'
        };
    });
})();
