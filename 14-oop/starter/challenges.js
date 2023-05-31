"use strict";

// * CHALLENGE#1
const Car = function (make, speed) {
  this.make = make; // * instance
  this.speed = speed; // * properties
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

// const bmw = new Car("BMW", 120);
// const mercedes = new Car("Mercedes", 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();

// mercedes.accelerate();
// mercedes.brake();
// mercedes.accelerate();

// * CHALLENGE#2
class CarCl {
  constructor(make, speed) {
    this.make = make; // * instance
    this.speed = speed; // * properties
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

// const ford = new CarCl("Ford", 120);

// console.log(ford.speedUS);

// ford.accelerate();
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.brake();
// ford.accelerate();

// ford.speedUS = 50;
// console.log(ford);

// * CHALLENGE#3
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// * Linking prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV("Tesla", 120, 23);

tesla.chargeBattery(90);
// tesla.brake();
// tesla.accelerate();

// * CHALLENGE#4
