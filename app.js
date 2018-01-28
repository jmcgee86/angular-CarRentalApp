(function(){
    
    var app = angular.module('carRental', [ ]);
    
    app.controller('RentalController', function(){
        this.products = cars;
        
    });
    
    var cars = [
        {
            carType: "Toyota Corolla",
            price: 55,
            description: "description of car",
            totalCars: 20,
            rented: 0,
            //canRent: true,
            noneLeft: false
        },
        {
            carType: "Toyota Prius",
            price: 75,
            description: "description of car",
            totalCars: 20,
            rented: 0,
            //canRent: false,
            noneLeft: false
        },
        {
            carType: "Toyota Rav4",
            price: 95,
            description: "description of car",
            totalCars: 20,
            rented: 0,
            //canRent: true,
            noneLeft: false
        }
    ];
})();