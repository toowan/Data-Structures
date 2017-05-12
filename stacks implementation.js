// STACKS

//Create Stack class/constructor
class Stack {
	constructor() {
		this.storage = {}; 
		this.count = 0;
	}

	push(value) {
    this.storage[this.count] = value;
    this.count++;
    
		return this.storage; 
	}

	remove(value) {
		if (this.count === 0) {
			return undefined; 
		} else {
		  
		  this.count--; 
			var deletedItem = this.storage[this.count]; 
			delete this.storage[this.count]; 
			return deletedItem; 
		}
	}

	size() {
		return this.count; 
	}
}


// TESTS 
var stack = new Stack(); 
stack.push('jimmy');
stack.push('compton');
stack.remove('compton');
stack.size();
