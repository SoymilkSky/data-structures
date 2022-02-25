var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  let keys = Object.keys(this.storage);
  if (keys.length === 0) {
    this.storage[0] = value;
  } else {
    let i = keys[keys.length - 1];
    let temp = this.storage[i];
    let j = i++;
    this.storage[i] = value;
    this.storage[j] = temp;
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
