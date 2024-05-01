import {Node} from "./ListNode";

// Time O(N) = N = size of linked list
// Space O(N) => worst case we need to store all the nodes in Set
const findCircularLinkedList = (root: Node): boolean => {
  let current = root;
  const visitedSet: Set<Node> = new Set();
  while (current !== null) {
    if (visitedSet.has(current)) return  true;
    visitedSet.add(current);
    current = current.next;
  }
  return false;
}


const findCircularLinkedListFloyd = (head: Node): boolean => {
  let fast = head;
  let slow = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}


const head = new Node(10);
head.next = new Node(20)
head.next.next = new Node(30);
console.log(findCircularLinkedListFloyd(head));