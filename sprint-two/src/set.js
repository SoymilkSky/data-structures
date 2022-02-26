var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this._storage.includes(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  if (this._storage.includes(item)) {
    return true;
  }
  return false;
};

// test for if indexOf = -1;
setPrototype.remove = function(item) {
  // this._storage.forEach(function(currentItem, index) {
  // });
  this._storage.splice(this._storage.indexOf(item), 1);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
