//  Linked List
// Problem with  array = double the size => O(n)
// Array bad performance => insert / update takes long time
// next to each other.
// Then come hash tables = pbls => not in order

const basket = ["apples", "grapes", "pears"];

//linked list : apples --> grapes --> pears

// pointer -> reference to another place in the memory
const obj1 = { a: true };
const obj2 = obj1; // direct memory access
obj1.a = "vijay";
console.log("1", obj1);
console.log("2", obj2);

// between 1D and 2D data models
// SLL and DLL
// chain of list nodes = LL
// class ListNode {
//   value: any,
//   next: ListNode
// }

// final listnode -> points to null means of end of LL
// Cycle in LL


// Reverse a LL
// Given a linked list, return it in reverse
// step-1 verify constraints
  // Null node => return null
  // single node => return single node
// step-2 test case
  // 1->2->3->4->5->null = 5->4->3->2>-1>null
  // 3->null = 3->null
  // null => null

// pseudo code
// currentNode = head
// while currentNode
// perform operation
// currentNode = currentNode.next


const reverseLL = (head) => {
  let prev = null;
  let current = head;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}


const revLL = (head) => {
  let prev = null;
  let current = head;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}






















