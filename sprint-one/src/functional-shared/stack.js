var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.storage = {};
  _.extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  let keys = Object.keys(this.storage);
  // if storage is empty, add value to key 0
  if (keys.length === 0) {
    this.storage[0] = value;
  } else {
    // else add value to a new key that is atop the old key
    let newKey = keys[keys.length - 1] + 1;
    this.storage[newKey] = value;
  }
};

stackMethods.pop = function() {
  let keys = Object.keys(this.storage);
  let popped = this.storage[keys[keys.length - 1]];
  delete this.storage[keys[keys.length - 1]];
  return popped;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};










