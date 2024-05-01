import {identical} from "./identical-tree";
import {Node} from "./BstNode";

const findRoot = (root1: Node, root2: Node): null | Node => {
  const dfs = (node: Node): Node | null => {
    if (!node) return null;
    if (identical(node, root2)) {
      return  node // Root of the subtree
    }
    const isLeftIdentical = dfs(node.left);
    if (isLeftIdentical) return  isLeftIdentical;
    return  dfs(node.right);
  }

  return dfs(root1);

}


const root1  = new Node(3);
root1.left = new Node(2);
root1.right = new Node(1);
root1.left.left = new Node(11);
root1.left.right  = new Node(10);


const root2 = new Node(2);
root2.left = new Node(11);
root2.right = new Node(10);

console.log(findRoot(root1, root2));