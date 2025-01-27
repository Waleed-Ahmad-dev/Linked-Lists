class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.headNode) {
      this.headNode = newNode;
    } else {
      let current = this.headNode;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value, this.headNode);
    this.headNode = newNode;
  }

  size() {
    let count = 0;
    let current = this.headNode;
    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  head() {
    return this.headNode;
  }

  tail() {
    let current = this.headNode;
    if (!current) return null;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    let current = this.headNode;
    let count = 0;
    while (current) {
      if (count === index) return current;
      count++;
      current = current.nextNode;
    }
    return null;
  }

  pop() {
    if (!this.headNode) return null;

    if (!this.headNode.nextNode) {
      this.headNode = null;
      return;
    }

    let current = this.headNode;
    while (current.nextNode && current.nextNode.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = null;
  }

  contains(value) {
    let current = this.headNode;
    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.headNode;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let result = "";
    let current = this.headNode;
    while (current) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    result += "null";
    return result;
  }

  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    const previous = this.at(index - 1);
    if (!previous) return;

    const newNode = new Node(value, previous.nextNode);
    previous.nextNode = newNode;
  }

  removeAt(index) {
    if (index === 0 && this.headNode) {
      this.headNode = this.headNode.nextNode;
      return;
    }

    const previous = this.at(index - 1);
    if (!previous || !previous.nextNode) return;

    previous.nextNode = previous.nextNode.nextNode;
  }
}

// Usage example:
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
console.log(list.toString()); // ( 1 ) -> ( 2 ) -> ( 3 ) -> null
list.prepend(0);
console.log(list.toString()); // ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> null
console.log(list.size()); // 4
console.log(list.head().value); // 0
console.log(list.tail().value); // 3
console.log(list.at(2).value); // 2
list.pop();
console.log(list.toString()); // ( 0 ) -> ( 1 ) -> ( 2 ) -> null
console.log(list.contains(2)); // true
console.log(list.contains(3)); // false
console.log(list.find(2)); // 2
list.insertAt(4, 2);
console.log(list.toString()); // ( 0 ) -> ( 1 ) -> ( 4 ) -> ( 2 ) -> null
list.removeAt(2);
console.log(list.toString()); // ( 0 ) -> ( 1 ) -> ( 2 ) -> null
