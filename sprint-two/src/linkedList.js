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
    // check if head is null
    // if it is, head = newNode
    if (list.head === null) {
      list.head = newNode;
      list.tail = list.head;
    }
  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
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
 */
