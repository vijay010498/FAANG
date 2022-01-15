// Given a linked list and numbers m and n , return it back
// with only positions m to n in reverse

// Positioning  - 1 Index
// 1 -> 2 -> 3-> 4-> 5-> -> null / m = 2 , n = 4
//o/p 1 -> 4-> 3-> 2-> 5-> null

// constraints
// 1. will m and n always be within the bounds of the linked list - yes
// 2. can we receive full reverse LL -  Yes

// Hints
// We already have code to reverse the linked list // now we need some code
// to say where to start and where to stop

// Space Complexity  = O(1)
// Time Complexity = O(n)
const reverseBetween = function (head, m, n) {
  let currentPos = 1,
    currentNode = head,
    start = head;
  while (currentPos < m) {
    start = currentNode;
    currentNode = currentNode.next;
    currentPos++;
  }

  let newList = null,
    tail = currentNode;
  while (currentPos >= m && currentPos <= n) {
    const next = currentNode.next;
    currentNode.next = newList;
    currentNode = next;
    currentPos++;
  }
  start.next = newList;
  tail.next = currentNode;
  // if m = 1 return the head
  if (m > 1) return head;
  else return newList;
};
