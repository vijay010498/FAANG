// merge multilevel DLL

// class ListNode {
//   value: any,
//   prev: ListNode,
//   next: ListNode
// }

// given a DLL, list nodes also have a
// child property that can point to a separate DLL.
// These child lists can also have  one or more child double linked lists
// of their own and so on

// return the list as a single level flattened double linked list


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
// 2. child = null after flattening


const flattenDLL = (head) => {
  if (!head) return head;

  let current  = head;
  while (current) {
    if (current.child === null) current = current.next;
    else {
      let tail = current.child;
      while (tail.next) tail = tail.next;
      tail.next = current.next;
      if (tail.next !== null) tail.next.prev = tail;
      current.next = current.child;
      current.next.prev = current;
      current.child = null;
    }
  }
  return  head;
}