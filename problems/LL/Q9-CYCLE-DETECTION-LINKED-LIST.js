// Find LL has a cycle

// simple solution
// Time complexity = O(n);
// Space Complexity = O(n);
const findCycleSimple = function (head) {
  let currentNode = head;
  const seenNodes = new Set();
  while (!seenNodes.has(currentNode)) {
    if (currentNode.next === null) return false;
    seenNodes.add(currentNode);
    currentNode = currentNode.next;
  }
  return currentNode;
};

// Floyd's Algorithm
// Time complexity = O(n)
// Space complexity = O(1)
const findCycle = function (head) {
  let hare = head,
    tortoise = head;
  while (true) {
    hare = hare.next;
    tortoise = tortoise.next;
    if (hare === null || hare.next === null) return false;
    else hare = hare.next;
    if (tortoise === hare) break;
  }
  // at this stage both tortoise and hare at the meeting point
  let p1 = head;
  let p2 = tortoise;
  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
  // meaning p1 and p2 are overlapping which is our cycle node
  return p1;
};
