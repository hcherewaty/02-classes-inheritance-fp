'use strict';

const Vehicle = () => ({
  drive() {
    return 'Moving Forward';
  },
  stop() {
    return 'Stopping';
  },
});

function Car(name) {
  let car = Object.assign(
    {},
    Vehicle(),
    {name},
    {wheels: 4},
  );
  return car;
}

function Motorcycle(name) {
  let motorcycle = Object.assign(
    {},
    Vehicle(),
    {name},
    {wheels: 2},
    {wheelie}
  );
  function wheelie() {
    return 'Wheee!';
  }
  return motorcycle;
}

function Helicopter(name) {
  let helicopter = Object.assign(
    {},
    {name},
    {wheels: 0},
    {spinning}
  );
  function spinning() {
    return 'I can fly around';
  }
  return helicopter;
}

function Airplane(name) {
  let airplane = Object.assign(
    {},
    {name},
    {wheels: 2},
    {takeoff}
  );
  function takeoff() {
    return 'I can fly too';
  }
  return airplane;
}

function Fish(name) {
  let fish = Object.assign(
    {},
    {name},
    {fins: 2},
    {bubbles}
  );
  function bubbles() {
    return 'Blub, blub, blub';
  }
  return fish;
}

function Lobster(name) {
  let lobster = Object.assign(
    {},
    {name},
    {fins: 0},
    {claws}
  );
  function claws() {
    return 'Pinch, pinch, pinch';
  }
  return lobster;
}

let newCar = new Car('outback');
console.log(newCar);
let newMotorcycle = new Motorcycle('honda');
console.log(newMotorcycle);


module.exports = {Car, Motorcycle, Helicopter, Airplane, Fish, Lobster};


