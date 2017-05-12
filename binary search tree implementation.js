class Node {
  constructor(value, leftChild, rightChild) {
    this.value = value;
    this.leftChild = leftChild;
    this.rightChild = rightChild; 
  }
}

class binarySearchTree {
  constructor(){
    this.rootNode = null; 
  }
  
  // Returns true if a value is present 
  containsValue(value) {
    var currentNode = this.rootNode; 
    
    // Do this while tree exists
    while (currentNode !== null) {
      if (value < currentNode.value) {
        currentNode = currentNode.leftChild;
      } else if (value > currentNode.value) {
        currentNode = currentNode.rightChild; 
      } else {
        return true; 
      }
    }
    return false; 
  }
  
  addNode(value) {
    var newNode = new Node(value, null, null); 
    
    // If rootNode does not exist, set it as newNode.
    if(this.rootNode === null) {
      this.rootNode = newNode; 
    } else {
      // Else, initialize currentNode at rootNode
      var currentNode = this.rootNode; 
    
      // Iterate through tree
      while (currentNode !== null) {
        // If value is less than currentNode, go left
        if (value < currentNode.value) {
          // If left node is empty, add it there
          if (currentNode.leftChild === null) {
            currentNode.leftChild = newNode;
            break;
          } else {
            // Else, move down to the next left Node. 
            currentNode = currentNode.leftChild;
          }
          // Repeat process for right side if value is greater
        } else if (value > currentNode.value) {
            if (currentNode.rightChild === null) {
              currentNode.rightChild = newNode; 
              break; 
            } else {
              currentNode = currentNode.rightChild; 
            }
        } else {
          // If value is the same as currentNode's value, do nothing
          console.log('Node already exists');
          break; 
        }
      }
    }
  }
  
  removeNode(value){
    var currentNode = this.rootNode;
    var previousNode = this.rootNode; 
    
    // LOCATE NODE
    while(currentNode !== null) {
      if (value < currentNode.value) {
        previousNode = currentNode; 
        currentNode = currentNode.leftChild;
      } else if (value > currentNode.value) {
        previousNode = currentNode; 
        currentNode = currentNode.rightChild; 
      } else {
        
        // REMOVAL STARTS HERE
        
        // If located node is a LEFT node 
        if (value < previousNode.value) {
          // If located left node has two children
          if (currentNode.leftChild && currentNode.rightChild) {
              previousNode.leftChild = currentNode.leftChild;
              currentNode.leftChild.rightChild = currentNode.rightChild;
              break;
          // If located left node has one child
          } else if (currentNode.leftChild || currentNode.rightChild) {
            // If it has a left child node, link previousNode to it.
            if (currentNode.leftChild !== null ) {
              previousNode.leftChild = currentNode.leftChild; 
              break;
            // If it has a right child node, link previousNode ot it
            } else  {
              previousNode.leftChild = currentNode.rightChild;
              break;
            }
          // If located left node has no children 
          } else {
            previousNode.leftChild = null; 
            break;
          }
          
        // If located node is a RIGHT node
        } else {
          // If located right node has two children
          if (currentNode.leftChild && currentNode.rightChild) {
            previousNode.rightChild = currentNode.leftChild;
            currentNode.leftChild.rightChild = currentNode.rightChild;
            break; 
          }
          // If located right node has one child
          else if (currentNode.leftChild || currentNode.rightChild) {
            if (currentNode.leftChild !== null ) {
              previousNode.leftChild = currentNode.leftChild; 
              break;
            // If it has a rightChild, link previousNode ot it
            } else {
              previousNode.rightChild = currentNode.rightChild;
              break;
            }
          // If located right node has no children
          } else {
            previousNode.rightChild = null; 
            break; 
          }
          
        }
      }
    }
  }
  
  traverse(process) {
    
    // Recursive helper method to traverse tree
    function inOrder(node) {
      console.log(node);
      if (node.leftChild !== null) {
        inOrder(node.leftChild);
      }
      
      // base case? how does the process function work?
      process.call(node);
      
      if (node.rightChild !== null) {
        inOrder(node.rightChild);
      }
    }
    
    inOrder(this.rootNode);
  }
  
  size() {
    var length = 0; 
    
    var process = function(){
      length++;
    } 
    
    this.traverse(process);

    return length;
  }

  toArray() {
    var array = [];
    
    var process = function(){
      var v = this.value;
      array.push(v);
    } 
    
    this.traverse(process); 
    
    return array;
  }

  toString() {
    return this.toArray().toString();
  }

}


// TESTS

var bst = new binarySearchTree();

bst.addNode(25);
bst.addNode(2);
bst.addNode(1);
bst.addNode(30);
bst.addNode(5);
bst.addNode(10);
bst.addNode(50);
bst.addNode(40);
bst.removeNode(40);
bst.toArray();