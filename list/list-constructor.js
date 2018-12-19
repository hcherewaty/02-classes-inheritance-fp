'use strict';

function List() {
  this.length = 0;
  this.data = {};
}
/**
 * Add item to the end of the list
 * @param item
 */
List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

/**
 * // Remove an item from the end of the list and return it's value
 * @returns {*}
 */
List.prototype.pop = function() {
  let returnValue = this.data[this.length-1];
  delete this.data[this.length-1];
  this.length--;
  return returnValue;
};

List.prototype.shift = function() {
  let outputValue = this.data[0];
  delete this.data[0];
  this.length--;
  // console.log(outputValue);
  return outputValue;
};

List.prototype.unshift = function(item) {
  this.data[this.length] = item;
  this.length++;
};



module.exports = List;
