class Vehicle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    info() {
        console.log(`Brand: ${this.brand}\nModel: ${this.model}`);
    }
}

class Car extends Vehicle {
    constructor(brand, model, doors) {
        super(brand, model);
        this.doors = doors;
    }

    info() {
        super.info();
        console.log(`Doors: ${this.doors}`);
    }
}

class Motorcycle extends Vehicle {
    constructor(brand, model, engineDisplacement) {
        super(brand. model);
        this.engineDisplacement = engineDisplacement;
    }

    info() {
        super.info();
        console.log(`Engine displacement: ${this.engineDisplacement}`);
    }
}

const car1 = new Car("Toyota", "Corolla", 4);
const car2 = new Car("Smart", "fortwo", 2);
const bike = new Motorcycle("Yamaha", "MT-07", 689);

car1.info();
car2.info();
bike.info();
