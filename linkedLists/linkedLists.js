// Write a class for LinkedList. It should have a head and a tail attribute which are initially null.

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
    this.length = 0;

    if (this.head && !this.tail) this.tail = this.head;
  }

  walk() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }

  isEmpty() {
    if (this.head == null) return true;

    return false;
  }

  append(data) {
    let newNode = new Node(data);

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;

    this.length++;
  }

  getAt(idx) {
    let current = this.head;
    let counter = 0;
    while (current !== null) {
      if (counter === idx) {
        return current;
      } else {
        current = current.next;
        counter++;
      }
    }
  }

  unshift(data) {
    let oldHeadValue = this.head;
    let newNode = new Node(data, oldHeadValue);

    this.head = newNode;
    this.length++
  }

  shift(data) {
    let newHead = this.head.next;
    let oldHead = this.head;
    if (newHead == null) {
      this.head = null;
      this.tails = null;
      return oldHead;
    }
    this.head = newHead;
    this.length--;
    return oldHead.data;
  }
  pop() {
    let current = this.head;
    let previousValue;

    if (current.next == null) {
      this.head = null;
      this.tail = null;
      return;
    }
    while (current !== null) {
      if (current.next == null) {
        previousValue.next = null;
        this.tail = previousValue;
        //                 need this to break the infinite loop but should probably refactor...
        break;
      } else {
        previousValue = current;
        current = current.next;
      }
    }
    this.length--;
  }

  insertAt(index, data) {
    debugger;
    let newNode = new Node(data, this.getAt(index));

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    let beforeNode = this.getAt(index - 1);
    if (beforeNode.next == null) {
      this.tail = newNode;
    }
    beforeNode.next = newNode;
    this.length++;
  }

  removeAt(index) {
    let beforeNode = this.getAt(index - 1);
    let afterNode = this.getAt(index + 1);
    beforeNode.next = afterNode;
    this.length--;
  }

  checkLength(){
    let currLength = 0;

    let current = this.head;
    while(current !== null){
      current = current.next;
      currLength++;
    }
    if(currLength === this.length){
      return `Lengths are the same! ${this.length}`
    }else{
      console.log('currLength = ',currLength,'this.length = ', this.length)
      this.length = currLength;
      return "Length attribute updated!"
    }
  }

  reverse(){
    // start at head and set it as the tail 
    let node = this.head
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;

    while (node !== null) {
      debugger;
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
}

// Add methods for:

let antNode = new Node('ant');
let beeNode = new Node('bee');
let caterpillarNode = new Node('caterpillar');

antNode.next = beeNode;
beeNode.next = caterpillarNode;

var insects = new LinkedList(antNode, caterpillarNode);
// var insects = new LinkedList(antNode);

// insects;
// insects.head = antNode;
// insects;

// walk, go through each thing in item in the list and console log it
insects.walk();
// debugger;
// append(data)
// Appends a new node with that data to end of list. (Again, it will help you to do this as much as possible without copying this from our example).
// insects.append('dragonfly');
// insects.walk();

// getAt(idx)
// Retrieve node at index position idx.
// console.log('getat',insects.getAt(0));

// unshift(data)
// Add a new node with data to the head.
// insects.unshift('test')

// shift(data)
// Remove & return head node.
// insects.shift();

// insects.pop()
// Remove & return tail node. Make sure you fix the next pointer on the next-to-last node!

// insertAt(idx, data)
// Insert a new node at position idx.
// insects.insertAt(3, 'test');
// insects.walk();

// removeAt(idx)
// Remove & return node at position idx.
// insects.removeAt(1);

//reverse
// insects.reverse();

// debugger;

insects.checkLength();
insects.length

