let car = {
    make : "volvo",
    speed : 160.0,
    engine : {
        size : 2,
        make : 'bmw',
        fuel : 'petrol',
        pistons :[ {maker : 'bmw'}, {helper: 'toyota'} ], //embeed a array with objects in it

    }
}

console.log(car['engine']);
console.log(car.make);
console.log(car.speed);

//change a property of the object

car.make = "Toyota";
console.log(car.make);
car.start = function (){ "Engine started"}  ;
console.log(car.start);

// Modificate the object

car.name = "juanito";
console.log(car);



delete car.name; // delete the property

console.log(car);