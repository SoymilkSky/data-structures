

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  console.log(this._storage);

  // store key value pair in an array
  // key in index 0, value in index 1
  var container = [];
  var tuple = [k, v];
  var exists = false;

  // var containerObj = {
  //   k : v
  //   next : null;
  // }

  // push new array into storage at index generated by the hash function

  // if storage at index is undefined
  // set index to be an empty array
  // then push empty array with new key value pair
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, container);
  }
  // get our container at hashed index
  // push new tuple into retrieved container
  // this._strage.set (index, updated container)

  // check for if key already exists
  // loop through retrieved container
  // if index[0] === k, replace the index of that retrived tuple with new tuple

  var retrievedContainer = this._storage.get(index);

  for (var i = 0; i < retrievedContainer.length; i++) {
    if (retrievedContainer[i][0] === k) {
      retrievedContainer[i] = tuple;
      exists = true;
    }
  }

  if (!exists) {
    retrievedContainer.push(tuple);
  }

  this._storage.set(index, retrievedContainer);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // get our container at index
  // iterate through checking each tuple at index[0]
  // if it equals k , return that value(index[1]);

  var retrievedContainer = this._storage.get(index);
  for (var i = 0; i < retrievedContainer.length; i++) {
    if (retrievedContainer[i][0] === k) {
      return retrievedContainer[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // get our container at index
  // iterate over container
  // if it equals k, splice
  var retrievedContainer = this._storage.get(index);
  for (var i = 0; i < retrievedContainer.length; i++) {
    if (retrievedContainer[i][0] === k) {
      retrievedContainer.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */