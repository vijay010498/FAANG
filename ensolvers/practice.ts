class Ceaser {
  private readonly shift: number;
  private readonly UPPER: number = 'A'.charCodeAt(0);
  private readonly LOWER: number = 'a'.charCodeAt(0);

  constructor(shift: number) {
    this.shift = shift % 26;
  }

  encrypt(string: string): string {
    let result = '';
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt(0);
        if (code >= this.UPPER && code <= this.UPPER + 25) {
          let shiftCode = code - this.UPPER + this.shift;
          if (shiftCode < 0) shiftCode += 26;
          result += String.fromCharCode(shiftCode % 26 + this.UPPER)
        } else if (code >= this.LOWER && code <= this.LOWER + 25) {
          let shiftCode = code - this.LOWER + this.shift;
          if (shiftCode < 0) shiftCode += 26;
          result += String.fromCharCode(shiftCode % 26 + this.LOWER)
        }
      } else {
        result += char;
      }
    }
    return result;
  }

  decrypt(string: string): string {
    let result = '';
    const reverseShift = -this.shift;
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt(0);
        if (code >= this.UPPER && code <= this.UPPER + 25) {
          let shiftCode = code - this.UPPER + reverseShift;
          if (shiftCode < 0) shiftCode += 26;
          result += String.fromCharCode(shiftCode % 26 + this.UPPER)
        } else if (code >= this.LOWER && code <= this.LOWER + 25) {
          let shiftCode = code - this.LOWER + reverseShift;
          if (shiftCode < 0) shiftCode += 26;
          result += String.fromCharCode(shiftCode % 26 + this.LOWER)
        }
      } else {
        result += char;
      }
    }
    return result;
  }
}


class TreeNode {
  data: any;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: any) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}


const findRootNode = (nodes: TreeNode[]): TreeNode | null => {
  for (let i = 0 ; i < nodes.length; i++) {
    const node = nodes[i];
    let isReferneced = null;
    for (let j = 0 ; j < nodes.length; j++) {
      if (nodes[j].left === node || nodes[j].right === node) {
        isReferneced = true;
        break;
      }
    }
    if (!isReferneced) return node;
  }
  return null;
}


const findRootNodeOptimised = (nodes: TreeNode[]): TreeNode | null => {
  const childNodes: Set<TreeNode> = new Set();
  for (const node of nodes) {
    if (node.left) childNodes.add(node.left);
    if (node.right) childNodes.add(node.right);
  }

  for (const node of nodes) {
    if (!childNodes.has(node)) {
      return node;
    }
  }

  return  null;
}


const identical = (node1: TreeNode, node2: TreeNode): boolean => {
  if (node1 === null && node2 === null) return true;
  if (node1 === null || node2 === null) return false;

  return (
    node1.data === node2.data &&
    identical(node1.left!, node2.left!) &&
    identical(node1.right!, node2.right!)
  )
}

const identicalRecur = (node1: TreeNode, node2: TreeNode): boolean => {
  const stack = [{node1, node2}];
  while (stack.length) {
    const {node1, node2}: any = stack.pop();
    if (node1 === null && node2 === null) continue;
    if (node1 === null || node2 === null) return false;

    if (node1.data !== node2.data) return false;
    stack.push({node1: node1.left, node2: node2.left})
    stack.push({node1: node1.right, node2: node2.right})
  }
  return true;
}


const findRootOfSub = (root1: TreeNode, root2: TreeNode): any => {
  const dfs = (node: TreeNode): any => {
    if (!node)  return null;
    if (identical(node, root2)) {
      return node;
    }

    // left subtree
    const result = dfs(node.left!);
    if (result) return result;

    return dfs(node.right!);
  }

  return dfs(root1);
}



// Linked List
class LLNode {
  private data: any;
  next: LLNode | null;

  constructor(data: any, next = null) {
    this.data = data;
    this.next = next;
  }
}
const reverseLL = (head: LLNode) => {
  let current = head;
  let prev = null;

  while (current !== null) {
    const front = current.next;
    current.next = prev;
    prev = current;
    current = front!;
  }
  return prev;
}

const detectLoop = (head: LLNode) => {
  const visitedSet: Set<LLNode> = new Set();
  let current: LLNode = head;
  while (current !== null) {
    if (visitedSet.has(current)) return true;
    visitedSet.add(current);
    current = current.next!;
  }
  return false;
}


const delectLoopFloyd = (head: LLNode) => {
  let slow: LLNode = head;
  let fast: LLNode = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next!;
    fast = fast.next!.next!;
    if (slow === fast) return true;
  }

  return false;
}




const maxDepthLevel = (root: TreeNode): number => {
  let level = 0;
  if (root === null) return level;
  const queue = [root];
  while (queue.length) {
    for (let i = 0; i < queue.length; i++) {
      const front = queue.shift();
      if (front!.left) queue.push(front!.left);
      if (front!.right) queue.push(front!.right);
    }
    level++;
  }
  return level;
}

const maxDepthLevelRec = (node: TreeNode): number => {
  if (node === null) return 0;
  const lh = maxDepthLevelRec(node.left!);
  const rh = maxDepthLevelRec(node.right!);
  return 1 + Math.max(lh, rh);
}



// Trie
class TrieNode {
  private links: any[];
  private flag: boolean;

  constructor() {
    this.links = new Array(26).fill(null);
    this.flag = false;
  }

  containsKey(char: string): boolean {
    return this.links[char.charCodeAt(0) - 'a'.charCodeAt(0)] !== null;
  }


  put(char: string, node: TrieNode) {
    this.links[char.charCodeAt(0) - 'a'.charCodeAt(0)] = node;
  }

  get(char: string) {
    return this.links[char.charCodeAt(0) - 'a'.charCodeAt(0)];
  }

  setEnd(): void {
    this.flag = true;
  }

  isEnd(): boolean {
    return this.flag;
  }
}


class Trie {
  private readonly root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(string: string) {
    let node = this.root;
    for (let i = 0; i < string.length; i++) {
      if (!node.containsKey(string[i])) {
        node.put(string[i], new TrieNode());
      }
      node = node.get(string[i]);
    }
    node.setEnd();
  }

  search(word: string) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!node.containsKey(word[i])) return false;
      node = node.get(word[i]);
    }
    return node.isEnd();
  }

  startsWith(prefix: string) {
    let node = this.root;
    for (let i = 0; i < prefix.length; i++) {
      if (!node.containsKey(prefix[i])) return false;
      node = node.get(prefix[i]);
    }
    return true;

  }
}

class TrieNode1 {
  links: any[];
  private endWithCount: number = 0;
  private countPrefix: number = 0;

  constructor() {
    this.links = new Array(26).fill(null);
  }

  containsKey(char: string): boolean {
    return this.links[char.charCodeAt(0) - 'a'.charCodeAt(0)] !== null;
  }

  put(char = '', node = new TrieNode1()) {
    this.links[char.charCodeAt(0) - 'a'.charCodeAt(0)] = node;
  }

  get(char: string) {
    return this.links[char.charCodeAt(0) - 'a'.charCodeAt(0)];
  }

  increaseEnd() {
    this.endWithCount++;
  }

  increasePrefix() {
    this.countPrefix++;
  }

  deleteEnd() {
    this.endWithCount--;
  }

  reducePrefix() {
    this.countPrefix--;
  }

  getEnd() {
    return this.endWithCount;
  }

  getPrefix() {
    return this.countPrefix;
  }
}

class Trie1 {
  private readonly root: TrieNode1;

  constructor() {
    this.root = new TrieNode1();
  }

  insert(word: string): void {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!node.containsKey(word[i])) {
        node.put(word[i], new TrieNode1());
      }
      node = node.get(word[i]);
      node.increasePrefix();
    }
    node.increaseEnd();
  }

  countWordsEqual(word: string) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!node.containsKey(word[i])) return 0;
      node = node.get(word[i]);
    }
    return node.getEnd();
  }

  countWordStartingWith(word: string) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!node.containsKey(word[i])) return 0;
      node = node.get(word[i]);
    }
    node.getPrefix();
  }

  erase(word: string) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!node.containsKey(word[i])) return null;
      node = node.get(node.get(word[i]));
      node.reducePrefix();
    }
    node.deleteEnd();
  }

  printAllWords(): any[] {
    const words: any[] = [];
    const dfs = (node: TrieNode1, path: any[]) => {
      if (node.getEnd() > 0) {
        const word = path.join('');
        for (let i = 0; i < node.getEnd(); i++) {
          words.push(word);
        }
      }
      for (let i = 0; i < node.links.length; i++) {
        if (node.links[i] !== null) {
          path.push(String.fromCharCode(i + 'a'.charCodeAt(0)));
          dfs(node.links[i], path);
          path.pop();
        }

      }
    }
    dfs(this.root, []);
    return words;
  }

  printAllWordsBFS(): any[] {
    const words: any[] = [];
    const queue = [{node: this.root, path: []}]

    while (queue.length) {
      const {node, path}: any = queue.shift();
      if (node.getEnd() > 0) {
        const word = path.join('');
        for (let i = 0; i < node.getEnd(); i++) {
          words.push(word);
        }
      }
      for (let i = 0; i < node.links.length; i++) {
        if (node.links[i] !== null) {
          queue.push({
              node: node.links[i],
              path: path.concat(String.fromCharCode(i + 'a'.charCodeAt(0)))
            }
          )
        }
      }
    }

    return words;
  }

  getAutoCompletionWords(string: string): any[] {
    let node = this.root;
    const words: any[] = [];
    for (let i = 0; i < string.length; i++) {
      if (!node.containsKey(string[i])) return words;
      node = node.get(string[i]);
    }

    // dfs
    const dfs = (node: TrieNode1, path: any[]) => {
      if (node.getEnd() > 0) {
        const suggestion = path.map((char) => char);
        suggestion.unshift(...string.split(''));
        words.push(suggestion.join(''));
      }
      for (let i = 0; i < node.links.length; i++) {
        if (node.links[i] !== null) {
          path.push(String.fromCharCode(i + "a".charCodeAt(0)));
          dfs(node.links[i], path);
          path.pop();
        }
      }
    }

    dfs(node, [])

    return words;
  }

  getAutoCompletionWordsBfs(string = '') {
    let node = this.root;
    const suggestions: any[] = [];
    for (let i = 0; i < string.length; i++) {
      if (!node.containsKey(string[i])) return suggestions;
      node = node.get(string[i]);
    }

    const queue = [{node, path: []}];
    while (queue.length) {
      const {node, path}: any = queue.shift();
      if (node.getEnd() > 0) {
        const suggestion = path.map((char: string) => char);
        suggestion.unshift(...string.split(''));
        suggestions.push(suggestion.join(''));
      }
      for (let i = 0; i < node.links.length; i++) {
        if (node.links[i] !== null) {
          queue.push({
            node: node.links[i],
            path: path.concat(String.fromCharCode(i + 'a'.charCodeAt(0)))
          })
        }
      }
    }
    return suggestions;
  }
}


class BST {
  private root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  insert(value: any) {
    const node = new TreeNode(value);
    if (!this.root) this.root = node;
    else {
      let current = this.root;
      while (true) {
        if (value < current.data) {
          if (current.left === null) {
            current.left = node;
            return;
          } else {
            current = current.left;
          }
        } else if (value > current.data) {
          if (current.right === null) {
            current.right = node;
            return;
          } else {
            current = current.right;
          }
        } else {
          // duplicate value
          return;
        }
      }
    }

  }

  find(value: any) {
    if (!this.root) return false;
    let current = this.root;
    while (true) {
      if (value === current.data) return true;
      if (value < current.data) {
        if (current.left === null) return false;
        current = current.left;
      } else if (value > current.data) {
        if (current.right === null) return false;
        current = current.right;
      }
    }
  }

  BFS() {
    const data = [];
    const queue = [this.root];
    while (queue.length) {
      const front = queue.shift();
      if (front) {
        data.push(front.data);
        if (front.left) queue.push(front.left);
        if (front.right) queue.push(front.right);
      }

    }
    return data;
  }

  DFSIn() {
    const data: any[] = [];
    const dfs = (node: TreeNode | null) => {
      if (node) {
        if (node.left) dfs(node.left);
        data.push(node.data);
        if (node.right) dfs(node.right);
      }
    }

    dfs(this.root);
    return data;
  }
}


