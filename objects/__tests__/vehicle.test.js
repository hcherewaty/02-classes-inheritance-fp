'use strict';

const Vehicle = require('../vehicle-factory.js');

describe('Vehicles', () => {

  describe('Car', () => {

    let car = new Vehicle.Car('foo');

    it('has 4 wheels', () => {
      expect(car.wheels).toEqual(4);
    });

    it('can drive', () => {
      expect(car.drive()).toBeTruthy();
    });

    it('can stop', () => {
      expect(car.stop()).toBeTruthy();
    });

    it('cannot do a wheelie', () => {
      expect(car.wheelie).toBeUndefined();
    });

  });

  describe('Motorcycle', () => {

    let motorcycle = new Vehicle.Motorcycle('foo');

    it('has 2 wheels', () => {
      expect(motorcycle.wheels).toEqual(2);
    });

    it('can drive', () => {
      expect(motorcycle.drive()).toBeTruthy();
    });

    it('can stop', () => {
      expect(motorcycle.stop()).toBeTruthy();
    });

    it('cannot do a wheelie', () => {
      expect(motorcycle.wheelie()).toBeTruthy();
    });

  });

  describe('Helicopter', () => {
    let helicopter = new Vehicle.Helicopter('foo');

    it('has 0 wheels', () => {
      expect(helicopter.wheels).toEqual(0);
    });

    it('can fly around', () => {
      expect(helicopter.spinning()).toBeTruthy();
    });
  });

  describe('Airplane', () => {
    let airplane = new Vehicle.Airplane('foo');

    it('has 2 wheels', () => {
      expect(airplane.wheels).toEqual(2);
    });

    it('can fly around too', () => {
      expect(airplane.takeoff()).toBeTruthy();
    });
  });

  describe('Fish', () => {
    let fish = new Vehicle.Fish('foo');

    it('has 2 fins', () => {
      expect(fish.fins).toEqual(2);
    });
    
    it('blows bubbles', () => {
      expect(fish.bubbles()).toBeTruthy();
    });

    describe('Lobster', () => {
      let lobster = new Vehicle.Lobster('foo');

      it('has 0 fins', () => {
        expect(lobster.fins).toBeLessThanOrEqual(0);
      });

      it('can pinch', () => {
        expect(lobster.claws()).toBeTruthy();
      });
    });
  });

});


