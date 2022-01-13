// Array - double up the size - O(n)
// Linked List - O(1) size

const basket = ["apples", "grapes", "pears"];

//linked list : apples --> grapes --> pears

// pointer -> reference to another place in the memory
const obj1 = { a: true };
const obj2 = obj1; // direct memory access
obj1.a = "vijay";
console.log("1", obj1);
console.log("2", obj2);

// reverse a linked list
// constraints
//1->2->3->4->5->null o/p = 5->4->3->2->1->null
//3 o/p -> 3

const reverseLinkedList = function (head) {
  let prev = null;
  let current = head;
  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
