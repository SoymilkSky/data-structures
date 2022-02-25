var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (Object.keys(storage).length === 0) {
      storage[0] = value;
    } else {
      let keys = Object.keys(storage);
      let newKey = keys[keys.length - 1] + 1;
      storage[newKey] = value;
    }
  };

  someInstance.dequeue = function() {
    let keys = Object.keys(storage);
    let dequeued = storage[keys[0]];
    delete storage[keys[0]];
    return dequeued;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
