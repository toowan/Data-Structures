class Node {
  constructor(value, nextNode) {
    this.value = value; 
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.headNode = new Node(null, null);
    this.lastNode = this.headNode; 
  }
  
  append(value) {
    var newNode = new Node(value, null);
    
    this.lastNode.nextNode = newNode;
    this.lastNode = newNode; 
  }
  
  getNodeAt(position) {
    var currentNode = this.headNode;
    
    for (var i = 0; i < position; i++){
      currentNode = currentNode.nextNode;
      if (currentNode === null) {
        throw new Error('Node does not exist at this position. Try again.');
      }
    }
    
    return currentNode;
  }
  
  getValueAt(position) {
    return this.getNodeAt(position).value;
  }
  
  updateNodeAt(value, position) {
    var currentNode = this.getNodeAt(position);
    currentNode.value = value; 
    return currentNode;
  }
  
  // This method only inserts node between head node and last node.
  addNodeAt(value, position) {
    var previousNode = this.getNodeAt(position-1);
    var currentNode = this.getNodeAt(position);
    var newNode = new Node(value, currentNode);
    if (position > 0 && previousNode !== null) {
      previousNode.nextNode = newNode;
    } else {
      throw new Error('Cannot insert new node at this position.')
    }
  
    return this.getNodeAt(0);
  }
  
  deleteNodeAt(position) {
    var currentNode = this.getNodeAt(position); // thuan node
    var previousNode = this.getNodeAt(position-1); // jimmy node
    
    if (currentNode.nextNode === null) {
      previousNode.nextNode = null;
      this.lastNode = previousNode;
    } else {
      previousNode.nextNode = currentNode.nextNode
    }
    
    return this.getNodeAt(0);
  }
  
}


// TESTS
var list = new LinkedList();
list.append('compton');
list.append('jimmy');
list.append('thuan');
list.getNodeAt(1);
list.deleteNodeAt(3);
list.append('thuan', 3);
list.addNodeAt('walle', 2);