var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;


  // takes a value, adds it to the end of the list
  // create a new node with passed in value
  // somehow find the end of the list?
  // set the current tail.next -> to be the new node
  // set list.tail to be new node
  list.addToTail = function(value) {
    // delcare a new Node with passed in value
    var newNode = new Node(value);
<<<<<<< HEAD
=======

>>>>>>> pair
    // check if head is null
    // if it is, head = newNode
    if (list.head === null) {
      list.head = newNode;
      list.tail = list.head;
<<<<<<< HEAD
=======
    } else {
      var currNode = list.head;
      // traverse the list to get to the tail
      // check if current node.next === null
      // if yes -> current node.next = newNode
      while (currNode.next !== null) {
        currNode = currNode.next;
      }
      currNode.next = newNode;
      list.tail = newNode;

      // for (var key in list)
      // if list[key].next === null
>>>>>>> pair
    }
  };

  list.removeHead = function() {
    // set head.next to be new head
    var nextHead = list.head.next;
    var oldHead = list.head;
    list.head = nextHead;
    return oldHead.value;
  };


  // IF WE HAVE TIME, MAKE THIS BETTER .
  list.contains = function(target) {
    // same traversal as addToTail but check target vs currNode value
    var currNode = list.head;
    while (currNode.next !== null) {
      if (currNode.value === target) {
        return true;
      }
      currNode = currNode.next;
      // check if currNode.next is the tail, if it is, check value against target
      if (currNode.next === null) {
        if (currNode.value === target) {
          return true;
        }
      }
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail = O(1)
 * removeHead = O(1)
 * contains = O(n)
 */