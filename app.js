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
            mpg:"30 City / 40 Highway",
            images:[
                {
                    full: 'images/corolla-full.jpeg',
                    thumb: 'images/corolla-thumb.jpeg'
                }
                ],
            totalCars: 20,
            rented: 0,
            //canRent: true,
            noneLeft: false
        },
        {
            carType: "Toyota Prius",
            price: 75,
            description: "description of car",
            mpg: "58 City / 53 Highway",
            images: [
                {
                  full: 'images/prius-full.jpeg',
                  thumb: 'images/prius-thumb.jpeg'
                }
                ],
            totalCars: 20,
            rented: 0,
            //canRent: false,
            noneLeft: false
        },
        {
            carType: "Toyota Rav4",
            price: 95,
            description: "description of car",
            mpg: "23 City / 30 Highway",
            images: [
                {
                    full: 'images/rav4-full.jpeg',
                    thumb: 'images/rav4-thumb.jpeg'
                }
                ],
            totalCars: 20,
            rented: 0,
            //canRent: true,
            noneLeft: false
        }
    ];
})();