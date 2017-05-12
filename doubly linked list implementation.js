class Node {
  constructor(value, previousNode, nextNode) {
    this.value = value;
    this.previousNode = previousNode;
    this.nextNode = nextNode; 
  }
}

class DoublyLinkedList {
  constructor() {
    this.headNode = new Node(null, null, null);
    this.lastNode = this.headNode;
  }
  
  append(value) {
    var newNode = new Node(value, null, null);
    
    newNode.previousNode = this.lastNode;
    this.lastNode.nextNode = newNode;
    this.lastNode = newNode;
  }
  
  insert(value, position) {
    
    var newNode = new Node(value, null, null);
    var currentNode = this.getNodeAt(position);   
    var previousNode = currentNode.previousNode; 
    
    newNode.previousNode = previousNode;
    newNode.nextNode = currentNode; 
    previousNode.nextNode = newNode; 
    currentNode.previousNode = newNode; 
  
    return this.toArray();
  }
  
  remove(position) {
    var currentNode = this.getNodeAt(position);   
    var previousNode = currentNode.previousNode; 
    
    // If current node is not last node
    if (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode; 
      currentNode.previousNode = previousNode; 
      previousNode.nextNode = currentNode; 
    } else {
      previousNode.nextNode = null;
      currentNode.previousNode = null; 
    }
    
    return this.toArray();
  }
  
  getNodeAt(position) {
    var currentNode = this.headNode.nextNode;
    
    for (var i = 0; i < position; i++) {
      currentNode = currentNode.nextNode;
      if (currentNode === null) {
        console.log('Position out of range. Try "append".');
        break; 
      }
    }
    
    return currentNode; 
  }
  
  update(position, value) {
    var node = this.getNodeAt(position);
    node.value = value;
    
    return this.toArray(); 
  }
  
  toArray() {
    var array = []; 
    
    var currentNode = this.headNode;
    while (currentNode.nextNode !== null) {
      array.push(currentNode.nextNode.value);
      currentNode = currentNode.nextNode; 
    }
    
    return array; 
  }
  
}



// TEST CASES
var dll = new DoublyLinkedList();
dll.append('jimmy');
dll.append('thuan');
dll.insert('compton', 1);
dll.insert('ebi', 2);
dll.insert('walle', 4);
// console.log(dll.insert('walle', 4));
console.log(dll.toArray());
dll.remove(3);
// console.log(dll.getNodeAt(3));
