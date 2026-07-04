let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function () {
        console.log("The car has started.");
    }
}

console.log("Car object properties:");
console.log('Make: ', car.make);
console.log('Model: ', car.model);
console.log('Year: ', car.year);
console.log("Start method:");
car.start(); // Call the start method