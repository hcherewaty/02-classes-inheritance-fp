'use strict';

class Vehicle {

  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }

  drive() {
    return 'Moving Forward';
  }

  stop() {
    return 'Stopping';
  }
}

class Car extends Vehicle {
  constructor(name) {
    super(name, 4);
  }
}

class Motorcycle extends Vehicle {
  constructor(name) {
    super(name, 2);
  }
  wheelie() {
    return 'Wheee!';
  }
}

class Helicopter extends Vehicle {
  constructor(name) {
    super(name, 0);
  }
  spinning() {
    return 'I can fly around';
  }
}

class Airplane extends Vehicle {
  constructor(name) {
    super(name, 2);
  }
  takeoff() {
    return 'I can fly too';
  }
}

class SeaCreature {
  constructor(name, fins) {
    this.name = name;
    this.fins = fins;
  }
}

class Fish extends SeaCreature {
  constructor(name) {
    super(name, 2);
  }
  bubbles() {
    return 'Blub, blub, blub';
  }
}

class Lobster extends SeaCreature {
  constructor(name) {
    super(name, 0);
  }
  claws() {
    return 'Pinch, pinch, pinch';
  }
}

let car = new Car('outback');
console.log(car);
let motorcycle = new Motorcycle('harley');
console.log(motorcycle);

console.log(motorcycle.wheelie());

module.exports = {Car, Motorcycle, Helicopter, Airplane, Fish, Lobster};
