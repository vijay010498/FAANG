// Given a linked list and numbers m and n , return it back
// with only positions m to n in reverse

// test cases
// 1->2->3->4->5->null / m = 2, n = 4
// op = 1>4->3->2->5>null

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    if (!this.head.next) {
      this.head = null;
      this.length--;
      return;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    const val = current.next.val;
    current.next = null;
    this.tail = current;
    this.length--;
    return val;
  }

  shift() {
    //remove first
    if (!this.head) return undefined;
    if (!this.head.next) {
      delete this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return;
    }
    this.head = this.head.next;
    this.length--;
  }

  unshift(val) {
    //add first
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  get(pos) {
    let i = 0;
    if (pos < 0 || pos >= this.length) return null;
    if (!this.head) return undefined;
    let currentNode = this.head;
    while (i !== pos) {
      currentNode = currentNode.next;
      i++;
    }
    return currentNode;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return null;

    if (index === 0) {
      this.unshift(val);
    } else if (index === this.length) {
      this.push(val);
    } else {
      let counter = 0;
      let curNode = this.head;
      let prev = curNode;
      const node = new Node(val);
      while (counter !== index) {
        prev = curNode;
        curNode = curNode.next;
        counter++;
      }
      prev.next = node;
      node.next = curNode;
      this.length++;
    }
  }

  remove(index) {
    if (index === 0) this.shift();
    else if (index === this.length - 1) this.pop();
    else {
      let counter = 0;
      let node = this.head;
      let prev = node;
      while (index !== counter) {
        prev = node;
        node = node.next;
        counter++;
      }
      prev.next = node.next;
      node.next = null;
    }
  }

  traverse() {
    let node = this.head;
    while (node) {
      console.log(node.val);
      node = node.next;
    }
    return this;
  }

  reverseBetween(m, n) {
    // 1 -> 2 -> 3-> 4-> 5-> -> null / m = 2 , n = 4
    //o/p 1 -> 4-> 3-> 2-> 5-> null
    let currentPos = 1;
    let currentNode = this.head;
    let start = currentNode;

    while (currentPos < m) {
      start = currentNode;
      currentNode = currentNode.next;
      currentPos++;
    }

    let newList = null, tail = currentNode;
    while (currentPos >=m && currentPos <= n) {
      const next = currentNode.next;
      currentNode.next = newList;
      currentNode = next;
      currentPos++
    }

    start.next = newList;
    tail.next = currentNode;

  }

  reverse() {
    if (!this.head) return undefined;
    if (!this.head.next) return null;
    let prev = null;
    let current = this.head;
    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    return this;
  }
}

const myLL = new SinglyLinkedList();
myLL.push(1);
myLL.push(2);
myLL.push(3);
myLL.push(4);
myLL.push(5);

myLL.reverse();
console.log(myLL.traverse());
