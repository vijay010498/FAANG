import {Node} from "./BstNodeWithHashing";
import {createHash} from 'crypto';

class Bst {
  private root: Node | null = null;

  private consistentHash(key: string): number {
    const hash = createHash('sha256');
    hash.update(key);
    const hashValue = hash.digest('hex');

    const slice = hashValue.substring(0, 8);
    return parseInt(slice, 16);
  }

  private getConsistentValue(value: number | string | object): number {
    let consistentValue: number = null;
    if (typeof value === "number") {
      consistentValue = value;
    } else if (typeof value === "string") {
      consistentValue = this.consistentHash(value);
    } else if (typeof value === "object") {
      consistentValue = this.consistentHash(JSON.stringify(value));
    }
    return consistentValue;
  }

  insert(value: number | string | object): Bst {
    const consistentValue = this.getConsistentValue(value);
    const node = new Node(consistentValue, value);
    if (!this.root) this.root = node;
    else {
      let current = this.root;
      while (true) {
        if (consistentValue < current.data) {
          if (current.left === null) {
            current.left = node;
            break;
          }
          current = current.left;
        } else if (consistentValue > current.data) {
          if (current.right === null) {
            current.right = node;
            break;
          }
          current = current.right;
        } else {
          // duplicate value
          break;
        }
      }
    }
    return this;
  }

  search(value: number | string | object): boolean {
    const consistentValue = this.getConsistentValue(value);
    let current = this.root;
    while (true) {
      if (current.data === consistentValue) return true;
      if (consistentValue < current.data) {
        if (current.left === null) return false;
        current = current.left;
      } else if (consistentValue > current.data) {
        if (current.right === null) return false;
        current = current.right;
      }
    }
  }

  printTree(): void {
    const dfs = (node: Node) => {
      if (node) {
        console.log(`Hashed Value:${node.data}, Actual Value : ${JSON.stringify(node.realValue)}`);
        if (node.left) dfs(node.left);
        if (node.right) dfs(node.right);
      }
    }
    dfs(this.root)
  }

  printTreeBfs(): void {
    const queue: Node[] = [this.root];
    while (queue.length) {
      const front: Node | null = queue.shift();
      if (front) {
        console.log(`Hashed Value:${front.data}, Actual Value : ${JSON.stringify(front.realValue)}`);
        if (front.left) queue.push(front.left);
        if (front.right) queue.push(front.right);
      }
    }
  }
}


const bst = new Bst();
bst.insert(10)
bst.insert(1)
bst.insert(20)
bst.insert('Vijay')
bst.insert({name: 'Vijay', age: 26})
bst.printTree();