/* global angular */

(function(){
    
    var app = angular.module('carRental', [ ]);
    
    app.controller('RentalController', function(){
        this.products = cars;
    });
    
    app.controller('RentController', function(){
       this.rentCar = function(product){
           product.rented++
           //console.log(product.rented + " " + product.carType +"'s rented")
           if (product.rented === product.totalCars){
                    product.noneLeft = true;
                }
       } 
    });
    
    var cars = [
        {
            carType: "Toyota Corolla",
            price: 55,
            description: "2018 Silver Toyoya Corolla",
            mpg:"30 City / 40 Highway",
            images:[
                {
                    full: 'images/corolla-full.jpeg',
                    thumb: 'images/corolla-thumb.jpeg'
                }
                ],
            totalCars: 20,
            rented: 0,
            noneLeft: false
        },
        {
            carType: "Toyota Prius",
            price: 75,
            description: "2018 Red Toyota Prius",
            mpg: "58 City / 53 Highway",
            images: [
                {
                  full: 'images/prius-full.jpeg',
                  thumb: 'images/prius-thumb.jpeg'
                }
                ],
            totalCars: 20,
            rented: 0,
            noneLeft: false
        },
        {
            carType: "Toyota Rav4",
            price: 95,
            description: "2018 Blue Toyota Rav4",
            mpg: "23 City / 30 Highway",
            images: [
                {
                    full: 'images/rav4-full.jpeg',
                    thumb: 'images/rav4-thumb.jpeg'
                }
                ],
            totalCars: 20,
            rented: 0,
            noneLeft: false
        }
    ];
})();