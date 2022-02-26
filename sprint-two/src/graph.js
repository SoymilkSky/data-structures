
// Instantiate a new graph
var Graph = function() {
  // create a container
  this.storage = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // create node object with properties of
  // value
  // hasEdge ?
  // edges
  // var newNode = {
  //   value: node,
  // };
  this.storage.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i] === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // iterate over storage
  for (var i = 0; i < this.storage.length; i++) {
    // if it contains the node
    if (this.storage[i] === node) {
      // splice
      this.storage.splice(i, 1);
    }
  }
  // iterate over edges
  for (var j = 0; j < this.edges.length; j++) {
    // if current edge has node
    if (this.edges[j].includes(node)) {
      // splice
      this.edges.splice(j, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // iterate over edges
  for (var i = 0; i < this.edges.length; i++) {
    // use indexof current edge and see if it has fromnode and to node
    if (this.edges[i].includes(fromNode) && this.edges[i].includes(toNode)) {
      // return true if it does
      return true;
    }
  }
  // return false
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // make array of [value of fromNode, value of toNode]
  // push into this.edges
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i].includes(fromNode) && this.edges[i].includes(toNode)) {
      this.edges.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // iterate over storage
  this.storage.forEach(function(item) {
    // callback function onto current node
    cb(item);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


// if node 1 is connected to node 2 and node 3

// our edges obj for node 1

// this.edges[1] = [2, 3];

// if node 1 is now connected to node 4

// this.edges[1] = [2, 3, 4, 5, 6, 7, 8, 9];
// this.edges[2] = [1];

// if we delete node 1 from storage
// we just delete this.edges[1]

// edges: [[1,2], [1,3]]