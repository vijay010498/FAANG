// Find LL has a cycle

// simple solution
// Time complexity = O(n);
// Space Complexity = O(n);
const findCycleSimple = (head) => {
  let currentNode = head;
  const seenMap = new Set();
  while (!seenMap.has(currentNode)) {
    if (currentNode.next === null) return false;
    seenMap.add(currentNode);
    currentNode = currentNode.next;
  }
  return  currentNode;
}

// Floyd's Algorithm
// Time complexity = O(n)
// Space complexity = O(1)
const findCycle = (head) => {
  let hare = head, tortise = head;
  while (true) {
    hare = hare.next;
    tortise = tortise.next;
    if (hare === null || hare.next === null) return false;
    else hare = hare.next;
    if (tortise ===  hare) break;
  }

  // at this stage both tortoise and hare at the meeting point
  let p1 = head, p2 = tortise;
  while ( p1 !==  p2) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1;
}