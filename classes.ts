class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('BIN BIN');
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log('Crank Crank');
  }
}

const car = new Car('Silver');
car.drive();
// car.honk();
