//filas

class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(item) {
      this.items.push(item);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.shift();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  const queue = new Queue();
  [3, 7, 9, 1, 0].forEach(item => queue.enqueue(item));
  
  const removedQueue = [];
  while (!queue.isEmpty()) {
    removedQueue.push(queue.dequeue());
  }
  
  console.log(removedQueue); // Output: [3, 7, 9, 1, 0]

  //lista

  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    add(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    remove() {
      if (!this.head) {
        return null;
      }
      const removedData = this.head.data;
      this.head = this.head.next;
      return removedData;
    }
  }
  
  const linkedList = new LinkedList();
  [3, 7, 9, 1, 0].forEach(item => linkedList.add(item));
  
  const removedLinkedList = [];
  let removedItem;
  while ((removedItem = linkedList.remove()) !== null) {
    removedLinkedList.push(removedItem);
  }
  
  console.log(removedLinkedList); // Output: [3, 7, 9, 1, 0]
  
  //pilha 
  class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  const stack = new Stack();
  [3, 7, 9, 1, 0].forEach(item => stack.push(item));
  
  const removedStack = [];
  while (!stack.isEmpty()) {
    removedStack.push(stack.pop());
  }
  
  console.log(removedStack); // Output: [0, 1, 9, 7, 3]
  