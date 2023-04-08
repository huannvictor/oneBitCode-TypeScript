class Car {
  //* declarações das propriedades antes do construtor
  brand: string;
  model: string;
  year: number;

  //* declarações das propriedades também no construtor
  constructor(brand: string, model: string, year: number) {
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
