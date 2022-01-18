//DLL
// has a previous value points to previous node or null
// Given a double linked list, list nodes also have a child
// property that can point to a separate DLL.
// These child lists can also have one or more child DLL of their own and so on.
// Return the list as a single level flattened doubly linked list

// First about the listNode
// class ListNode {
//     value :  any,
//     prev: ListNode,
//     next : listNode,
//     child : null // or head of an another node
// }

// constraints
// 1. Can a DLL have multiple child list nodes?
// Yes, every list node can have multiple levels of children

// time complexity  = O(2n) = O(n)
// space complexity = O(1)
const flattenNodes = function (head) {
  if (!head) return head;
  let currentNode = head;
  while (currentNode !== null) {
    if (currentNode.child === null) currentNode = currentNode.next;
    else {
      let tail = currentNode.child;
      while (tail.next !== null) tail = tail.next;
      tail.next = currentNode.next;
      if (tail.next !== null) tail.next.prev = tail;
      currentNode.next = currentNode.child;
      currentNode.next.prev = currentNode;
      currentNode.child = null;
    }
  }
  return head;
};
