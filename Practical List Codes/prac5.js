class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.mileage = 0; // Initialize mileage to 0
    }
  
    displayDetails() {
      return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }
  
    calculateMileage(milesDriven, fuelConsumed) {
      if (fuelConsumed <= 0) {
        return 0;
      }
      return milesDriven / fuelConsumed;
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
      super(make, model, year);
      this.numDoors = numDoors;
    }
  
    displayDetails() {
      return `${super.displayDetails()}, Number of Doors: ${this.numDoors}`;
    }
  }
  
  class Motorcycle extends Vehicle {
    constructor(make, model, year, engineSize) {
      super(make, model, year);
      this.engineSize = engineSize;
    }
  }
  
  const car1 = new Car("Toyota", "Camry", 2023, 4);
  const motorcycle1 = new Motorcycle("Honda", "CBR500R", 2023, "500cc");
  
  console.log(car1.displayDetails());
  console.log(motorcycle1.displayDetails());
  