// reverse M*N LinkedList
// // Given a linked list and numbers m and n , return it back
// // with only positions m to n in reverse

// 1->2->3->4->5->null // m = 2 , n = 4
// 1->4->3->2->5->null

// constraints
// 1. will m and n always be within the bounds of the linked list - yes
// 2. can we receive full reverse LL -  Yes

const reverseBetween = (head, m, n) => {
  let currentPos = 1, currentNode = head, start = head;

  while (currentPos < m) {
    start = currentNode;
    currentNode = currentNode.next;
    currentPos++;
  }

  let newList = null, tail = currentNode;

  while (currentPos >=m && currentNode <= n) {
    const next = currentNode.next;
    currentNode.next = newList;
    currentNode = next;
    currentPos++;
  }

  start.next = newList;
  tail.next = currentNode;
}