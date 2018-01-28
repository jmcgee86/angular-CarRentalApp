(function(){
    
    var app = angular.module('carRental', [ ]);
    
    app.controller('RentalController', function(){
        this.product = car;
        
    });
    
    var car = {
        price: 55,
        carType: "Toyota Corolla",
        description: "description of car",
        totalCars: 20,
        rented: 0,
        canRent: true,
        noneLeft: false
    }
    
})();