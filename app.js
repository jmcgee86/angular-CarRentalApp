(function(){
    
    var app = angular.module('carRental', [ ]);
    
    app.controller('RentalController', function(){
        this.products = cars;
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
            noneLeft: false,
            rent: function(){
                this.rented++
                console.log(this.rented + " " + this.carType + "'s rented");
                if (this.rented === this.totalCars){
                    this.noneLeft = true;
                }
            }
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
            noneLeft: false,
            rent: function(){
                this.rented++
                console.log(this.rented + " " + this.carType + "'s rented");
                if (this.rented === this.totalCars){
                    this.noneLeft = true;
                }
            }
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
            noneLeft: false,
            rent: function(){
                this.rented++
                console.log(this.rented + " " + this.carType + "'s rented");
                if (this.rented === this.totalCars){
                    this.noneLeft = true;
                }
            }
        }
    ];
})();