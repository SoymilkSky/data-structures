var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  let keys = Object.keys(this.storage);
  if (keys.length === 0) {
    this.storage[0] = value;
  } else {
    let newKey = keys[keys.length - 1] + 1;
    this.storage[newKey] = value;
  }
};

queueMethods.dequeue = function() {
  let keys = Object.keys(this.storage);
  let dequeued = this.storage[keys[0]];
  delete this.storage[keys[0]];
  return dequeued;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};