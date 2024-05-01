import {Node} from "./BstNode";


// O(N) = N => size of th given nodes
// O(N) => Space
const findRootNode = (nodes: Node[]): Node | null => {
  const childNodes: Set<Node> = new Set();
  for (const node of nodes) {
    if (node.left) childNodes.add(node.left);
    if (node.right) childNodes.add(node.right);
  }

  for (const node of nodes) {
    if (!childNodes.has(node)) return node; // Root node
  }
  return null;
}

