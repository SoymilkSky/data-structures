var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function(value) {
  let keys = Object.keys(this.storage);
  if (keys.length === 0) {
    this.storage[0] = value;
  } else {
    let oldKey = keys[keys.length - 1];
    let oldValue = this.storage[oldKey];
    let newKey = oldKey++;
    this.storage[oldKey] = value;
    this.storage[newKey] = oldValue;
  }
};

Stack.prototype.pop = function() {
  let keys = Object.keys(this.storage);
  let popped = this.storage[keys[keys.length - 1]];
  delete this.storage[keys[keys.length - 1]];
  return popped;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};


