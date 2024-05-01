function getAsciiValue(char: string): number {
  return char.charCodeAt(0);
}

function scoreOfString(s: string): number {
  let score = 0;

  for (let i = 0; i < s.length - 1; i++) {
    score += Math.abs(getAsciiValue(s[i]) - getAsciiValue(s[i + 1]));
  }

  return score;
}


function partitionString(s: string): number {
  let min = 1;
  const set = new Set();

  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      min += 1;
      set.clear();
    }
    set.add(s[i]);
  }

  return min;
}

function findRelativeRanks(score: number[]): string[] {
  const indexMap = new Map();
  const result = new Array(score.length);
  score.slice().sort((a, b) => b - a).forEach((value, index, array) => {
    indexMap.set(value, index)
  });

  score.forEach((score, index) => {
    const scoreValue = indexMap.get(score);
    switch (scoreValue) {
      case 0:
        result[index] = 'Gold Medal';
        break;
      case 1:
        result[index] = 'Silver Medal';
        break;
      case 2:
        result[index] = 'Bronze Medal'
        break;
      default:
        result[index] = `${scoreValue + 1}`
    }
  });
  return result;
}

class TreeNode {
  val: number;
  right: TreeNode | null;
  left: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function findMode(root: TreeNode | null): number[] {
  const result: number[] = [];
  const visitedMap = new Map();

  // const queue = [root];
  // while (queue.length) {
  //   const front = queue.shift();
  //   if (front?.left) queue.push(front?.left);
  //   visitedMap.has(front?.val) ? visitedMap.set(front?.val, visitedMap.get(front?.val) + 1) : visitedMap.set(front?.val,1);
  //   if (front?.right) queue.push(front?.right);
  // }
  const dfs = (root: TreeNode | null) => {
    if (root?.left) dfs(root.left);
    if (root)
      visitedMap.has(root?.val) ? visitedMap.set(root?.val, visitedMap.get(root?.val) + 1) : visitedMap.set(root?.val,1);
    if (root?.right) dfs(root.right);
  }

  dfs(root);

  let max = 0;
  visitedMap.forEach((value,) => {
    max = Math.max(max, value);
  })

  visitedMap.forEach((value, key) => {
    if (value >= max) result.push(key);
  })
  return result;
}

function isValidBST(root: TreeNode | null): boolean {
  const dfs = (node: TreeNode | null, lower: number, upper: number) => {
    if (node === null) return true;

    const currentValue = node.val;
    if (currentValue <= lower || currentValue >= upper) return false;

    if (!dfs(node.right, currentValue, upper)) return false;
    if (!dfs(node.left, lower, currentValue)) return false;

    return  true;
  }
  return dfs(root, -Infinity, Infinity);
}

const root = new TreeNode(1);
root.left = new TreeNode(-1);

console.log(isValidBST(root));

