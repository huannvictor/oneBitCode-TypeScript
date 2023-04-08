class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    drive() {
        console.log(`Driving the ${this.brand} ${this.model}...`);
    }
}
const myCar = new Car("Ford", "Mustang", 2022);
myCar.drive(); // Output: "Driving the Ford Mustang..."
