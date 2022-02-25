var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fixED

  // extend methods into function
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // declare new child object with passed in value
  var newObj = Tree(value);
  this.children.push(newObj);
  // check if newTree.children is empty , if yes, we can just push new child object into
  // newTree.children
};

treeMethods.contains = function(target) {
  // what do you want to to for the current input
  // case 1
  // if the children.value is target, return true
  if (this.value === target) {
    return true;
  }
  // case 2
  // case ..._
  // detect nestedness
  if (this.children.length !== 0) {
    //if children is not empty, iterate through children array

    for (var i = 0; i < this.children.length; i++) {
      // iterate over nested structure
      // recursively call function on each value

      // danny's comment while looking at this during lunch
      // I think we can use a conditional here,
      //if this call below returns true, we can just return true ?
      if (this.children[i].contains(target) === true) {
        return true;
      }
    }
  }
  return false;

  // --------- what I was thinking of (danny) --------
  // if (this.children.value === target) {
  //   return true;
  // }

  // var loopThroughChildren = function(child, targVal) {
  //   if (child.children.length !== 0) {
  //     for (var i = 0; i < child.children.length; i++) {
  //       if (child[i].children.length !== 0) {
  //         loopThroughChildren(child[i].children, targVal);
  //       }
  //     }
  //   }
  // };

  // loopThroughChildren(this.children, target);

  // return false;

};

// var newTree = new Tree();
// newTree.addChild(5);
// console.log(newTree);
// console.log(newTree.children);
// newTree.children[0].addChild(6);

/*
 * Complexity: What is the time complexity of the above functions?
 *
 */

// {
//   value:
//   children: [
//     {value:
//      children:
//     },
//     {value:
//       children:
//     }
//   ]
// }