import {Node} from "./BstNode";

export const identical = (root1: Node, root2: Node): boolean => {
  if (root1 === null && root2 === null) return true;
  if (root1 === null || root2 === null) return false;

  return (
    root1.data === root2.data &&
    identical(root1.left, root2.left) &&
    identical(root1.right, root2.right)
  )
}