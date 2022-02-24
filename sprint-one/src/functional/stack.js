var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    // if the storage is empty, add new value to storage at key 0;
    if (Object.keys(storage).length === 0) {
      storage['0'] = value;
    } else {
      // else, find the last key in the storage object, add 1 to it, assign old value to new key
      // assign new value to old key;
      let keys = Object.keys(storage);
      let i = keys[keys.length - 1];
      let temp = storage[i];
      let j = i++;
      storage[i] = value;
      storage[j] = temp;
    }
  };

  someInstance.pop = function() {
    // declare variable to hold the value to be deleted
    // delete value
    // return deleted value
    let stackKeys = Object.keys(storage);
    let popped = storage[stackKeys[stackKeys.length - 1]];
    delete storage[stackKeys[stackKeys.length - 1]];
    return popped;
  };

  someInstance.size = function() {
    // return length of keys array of storage
    return Object.keys(storage).length;
  };

  return someInstance;
};
