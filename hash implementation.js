class Node {
  constructor(key, value, nextNode) {
    this.key = key;
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor(){
    this.headNode = new Node(null, null, null);
    this.lastNode = this.headNode; 
  }
  
  append(key, value) {
    var newNode = new Node(key, value, null);
    this.lastNode.nextNode = newNode
    this.lastNode = newNode; 
  }
  
  getNodeAt(key) {
    var currentNode = this.headNode.nextNode;  
    
    while (currentNode !== null) {
      if (currentNode.key === key) { 
        return currentNode;
      } else {
        currentNode = currentNode.nextNode;
      }
    }
    return null; 
  }

  remove(key) {

    var currentNode = this.headNode.nextNode;  
    var previousNode = this.headNode;  
    
    // Get currentNode and previousNode
    while (currentNode !== null && currentNode.key !== key) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    
    // If node is not the last one
    if (currentNode.nextNode !== null) {
      previousNode.nextNode = currentNode.nextNode;
    } else {
      previousNode.nextNode = null;
    }

    
  }
  
  // Display linked list as an array
  toArray() {
    var array = [];
    var currentNode = this.headNode;
    
    while (currentNode.nextNode !== null) {
      array.push(" {" + currentNode.nextNode.key + " => " + currentNode.nextNode.value + "}");
      currentNode = currentNode.nextNode; 
    }
    return array; 
  }
}


class HashTable {
  constructor(size) {
    this.size = size; 
    this.array = [];
    
    for (var i = 0; i < size; i++) {
      this.array.push(new LinkedList()); 
    }
  }
  
  hashCode(string) {
    var stringInt = 0;
    
    if (string.length === 0) {
      return stringInt;
    } else {
      for (var i = 0; i < string.length; i++) {
        stringInt += string.charCodeAt(i);
      }
      return stringInt % this.size
    }
  }
  
  getLinkedList(index) {
    return this.array[index]; 
  }
  
  addNode(key, value) {
    var index = this.hashCode(key); 
    var list = this.getLinkedList(index); 
    var node = list.getNodeAt(key); // Returns node with specified key
  
    // If node with key already exists (not null), update its value
    if (node !== null) {
      node.value = value;
    } else {
      // If it does not exist, append it to list
      list.append(key, value);
    }
    
    return value;  
  }
  
  getNode(key) {
    var index = this.hashCode(key);
    var list = this.getLinkedList(index);
    
    return list.getNodeAt(key); 
  }
  
  getNodeValue(key) {
    return this.getNode(key).value; 
  }
  
  removeNode(key) {
    var index = this.hashCode(key);
    var list = this.getLinkedList(index);
    
    list.remove(key); 
    return true;
  }
  
  display() {
    for (var i = 0; i < this.size; i++) {
      console.log(i + ':' + this.getLinkedList(i).toArray());
    }
  }
  
}



// TESTS 

var hash = new HashTable(4);
hash.addNode('jimmy', 'boy');
hash.display();
hash.addNode('thuan', 'goddess');
hash.addNode('compton', 'beast');
hash.removeNode('jimmy');

// var ll = new LinkedList();
// ll.append('compton', 'pup');
// ll.append('thuan', 'queen');
// ll.append('jimmy', 'sex god');
// ll.remove('jimmy');
// console.log(ll.toArray());


