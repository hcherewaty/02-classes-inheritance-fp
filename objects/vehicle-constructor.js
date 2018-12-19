'use strict';

const Vehicle = function(name, wheels) {
  this.name = name;
  this.wheels = wheels;
};

Vehicle.prototype.drive = () => {
  return 'Moving Forward';
};

Vehicle.prototype.stop = () => {
  return 'Stopping';
};

// Car Constructor
const Car = function(name) {
  Vehicle.call(this, name, 4);
};

Car.prototype = new Vehicle();

const Motorcycle = function(name) {
  Vehicle.call(this,name,2);
};

Motorcycle.prototype = new Vehicle();

Motorcycle.prototype.wheelie = () => {
  return 'Wheee!';
};

//Flying Vehicle Constructor
const Flying = function(name, wheels) {
  this.name = name;
  this.wheels = wheels;
};

Flying.prototype.engines = () => {
  return 'I am flying';
}

const Helicopter = function(name) {
  Flying.call(this,name,0);
};

Helicopter.prototype = new Flying();

Helicopter.prototype.spinning = () => {
  return 'I can fly around';
}

const Airplane = function(name) {
  Flying.call(this,name,2);
}

Airplane.prototype = new Flying();

Airplane.prototype.takeoff = () => {
  return 'I can fly too';
}

const SeaCreature = function(name, fins) {
  this.name = name;
  this.fins = fins;
};

SeaCreature.prototype.swim = () => {
  return 'we can swim';
}

const Fish = function(name) {
  SeaCreature.call(this,name,2);
};

Fish.prototype = new SeaCreature();

Fish.prototype.bubbles = () => {
  return 'Blub, blub, blub';
}

const Lobster = function(name) {
  SeaCreature.call(this,name,0);
};

Lobster.prototype = new SeaCreature();

Lobster.prototype.claws = () => {
  return 'Pinch, pinch, pinch';
};


module.exports = {Car, Motorcycle, Helicopter, Airplane, Fish, Lobster};
