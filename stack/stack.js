class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;

    }
    peek() {
        return this.top;
    }
    push(value){
        const newNode = new Node(value);
        
        if(this.length === 0){
        this.top= newNode;
        this.bottom = value;
        }
        else {
            const holdingPointer = this.top;
            this.top= newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }
    pop() {
        const item = this.top;
        if(this.length === 1){
            this.top = null;
            this.bottom = null;
        } else {
            this.top = this.top.next;
        }
        this.length--;
        return this;
    }
    // Check if the stack is empty
  isEmpty() {
      return this.length === 0;
  }

  // Get the size of the stack
  size() {
      return this.length;
  }

}

const myStack = new Stack();
myStack.push("hola");
myStack.push("soy");
myStack.push("Jolie");
myStack.pop();
myStack;