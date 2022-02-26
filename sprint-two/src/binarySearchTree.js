var BinarySearchTree = function(value) {
  var instance = Object.create(bstMethods);
  instance.value = value;
  instance.left = null;
  instance.right = null;
  return instance;
};

var bstMethods = {};

bstMethods.insert = function(value) {
  // generate new bst object with passed in value
  var newBst = BinarySearchTree(value);
  // if passed in value is less than/greater than this.value
  // check if this.left/right are null
  // if null, set corresponding left/right to be newBst
  // if corresponding node is not null, set current node to be this.right/left
  // call recursive function(value)

  // what do you want to do
  // case 1
  // if this.value > value
  if (this.value > value) {
    if (this.left === null) {
      this.left = newBst;
    } else {
      this.left.insert(value);
    }
  }

  if (this.value < value) {
    if (this.right === null) {
      this.right = newBst;
    } else {
      this.right.insert(value);
    }
  }
  // if this.left === null
  // set this.left to be newBst
  // else
  // recurse down until this.left IS null
  // case 2
  // if this.value < value
  // if this.right === null
  // set this.right to be newBst
  // else
  // recurse down until this.right IS null


  // detect nestedness
  // recursive case
  // iterate over whatever is nested
  // call function again on current item

};

bstMethods.contains = function(value) {
  // what do we want to do
  // check if this.value === value , if yes, return true
  //case 1

  var flag = false;
  var currLeft = this.left;
  var currRight = this.right;
  var currValue = this.value;

  var goDeeper = function(l, r, cVal, val) {
    if (cVal === value) {
      return true;
    }

    // case 2
    if (cVal > value) {
      if (l === null) {
        flag = false;
      } else {
        if (goDeeper(l.left, r.right, l.value, val)) {
          flag = true;
        }
      }
    }

    // case 3
    if (cVal < value) {
      if (r === null) {
        flag = false;
      } else {
        if (goDeeper(l.left, r.right, r.value, value)) {
          flag = true;
        }
      }
    }
  };

  goDeeper(currLeft, currRight, currValue, value);

  return flag;
};

bstMethods.depthFirstLog = function(cb) {
  // what do we wanna do
  // case 1
  // if both are null, cb function on this.value
  if (this.right === null && this.left === null) {
    cb(this.value);
  } else if (this.right !== null && this.left === null) {
    cb(this.value);
  } else if (this.right === null && this.left !== null) {
    cb(this.value);
  } else {
    cb(this.value);
  }
  // case 2
  // if left is null, cb on right
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  // if right is null, cb on left
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */



// if (this.value === value) {
//   return true;
// }

// // case 2
// if (this.value > value) {
//   if (this.left === null) {
//     return false;
//   } else {
//     if (this.left.contains(value)) {
//       return true;
//     }
//   }
// }

// // case 3
// if (this.value < value) {
//   if (this.right === null) {
//     return false;
//   } else {
//     if (this.right.contains(value)) {
//       return true;
//     }
//   }
// }
