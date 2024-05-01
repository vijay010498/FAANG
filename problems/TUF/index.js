// Two Sum : Check if a pair with given sum exists in Array
//
//
// 11
//
// 0
// Problem Statement: Given an array of integers arr[] and an integer target.
//
// 1st variant: Return YES if there exist two numbers such that their sum is equal to the target. Otherwise, return NO.
//
// 2nd variant: Return indices of the two numbers such that their sum is equal to the target. Otherwise, we will return {-1, -1}.
//
// Note: You are not allowed to use the same element twice. Example: If the target is equal to 6 and num[1] = 3, then nums[1] + nums[1] = target is not a solution.
//
//   Examples:
//
// Example 1:
// Input Format: N = 5, arr[] = {2,6,5,8,11}, target = 14
// Result: YES (for 1st variant)
// [1, 3] (for 2nd variant)
// Explanation: arr[1] + arr[3] = 14. So, the answer is “YES” for the first variant and [1, 3] for 2nd variant.
//
//   Example 2:
// Input Format: N = 5, arr[] = {2,6,5,8,11}, target = 15
// Result: NO (for 1st variant)
// [-1, -1] (for 2nd variant)
// Explanation: There exist no such two numbers whose sum is equal to the target.


// O(N^2)
// O(1)
const twoSum = (arr = [], num) => {
  // Brute force
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) return [i + 1, j + 1]
    }
  }
  return false;
}

const twoSumOpti = (arr = [], num) => {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      return [map.get(arr[i]), i + 1]
    }
    const numberToFind = num - arr[i];
    map.set(numberToFind, i + 1);
  }

  return false;
}


// Stock Buy and Sell | (DP-35)
//
//
// Best time to buy and sell stock
//
// We are given an array Arr[] of length n. It represents the price of a stock on ‘n’ days. The following guidelines need to be followed:
//
//   We can buy and sell a stock only once.
//   We can buy and sell the stock on any day but to sell the stock, we need to first buy it on the same or any previous day.
//   We need to tell the maximum profit one can get by buying and selling this stock.


// Time: O(n^2)
// Space: O(1)
const maxStockProfit = (arr = []) => {
  let maxProfit = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const profit = (arr[j] - arr[i])
      maxProfit = Math.max(maxProfit, profit)
    }
  }
  return maxProfit;
}

// Time = O(N)
// Space = O(1)
const maxStockProfitOpti = (arr = []) => {
  let maxProfit = 0, lowestPrice = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const profitOfTheDay = arr[i] - lowestPrice;
    maxProfit = Math.max(maxProfit, profitOfTheDay);
    lowestPrice = Math.min(lowestPrice, arr[i])
  }

  return maxProfit;
}

//
// Maximum Product Subarray in an Array

// Problem Statement: Given an array that contains both negative and positive integers, find the maximum product subarray.
//
//   Examples
// Example 1:
// Input:
//
//   Nums = [1,2,3,4,5,0]
// Output:
//
//   120
// Explanation:
//
//   In the given array, we can see 1×2×3×4×5 gives maximum product value.
//
//
//   Example 2:
// Input:
//   Nums = [1,2,-3,0,-4,-5]
// Output:
//
//   20
// Explanation:
//
//   In the given array, we can see (-4)×(-5) gives maximum product value.

// O(N^3)
// O(1)
const maxSubArrayProd = (arr = []) => {
  let maxProduct = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let prod = 1;
      for (let k = i; k <= j; k++) {
        prod = prod * arr[k];
      }
      maxProduct = Math.max(prod, maxProduct);
    }
  }
  return maxProduct;
}


// O(N^2)
// O(1)
const maxSubArrayProd1 = (arr = []) => {
  let maxProduct = 0;
  for (let i = 0; i < arr.length; i++) {
    let prod = 1;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] !== 0)
        prod = prod * arr[j];
    }
    maxProduct = Math.max(prod, maxProduct);
  }
  return maxProduct;
}

// optimal
// 1. Observation
// 2. Modification of Kadans algorithm

// Observations
// 1. All positive integers
// 2. Even number of negative
// 3. Odd number of negative
// 4. Zero

// Idea is when we encounter a -ve value either maximum of prefix [numbers before -ve] or maximum os suffix [numbers after -ve]
// When we encounter zero, set the carry value to 1 since we start omitting zero


// O(N)
// O(1)
const maxSubArrayProd2 = (arr = []) => {
  let max = Number.MIN_VALUE, prefix = 1, suffix = 1;
  for (let i = 0; i < arr.length; i++) {
    if (prefix === 0) prefix = 1;
    if (suffix === 0) suffix = 1;

    prefix = prefix * arr[i];
    suffix = suffix * arr[arr.length - i - 1];
    max = Math.max(max, Math.max(prefix, suffix));
  }
  return max;
}


// O(N^2)
// O(N)
const longSubstr = (str = '') => {
  let maxLength = 0;
  for (let i = 0; i < str.length; i++) {
    let length = 1;
    let set = new Set(str[i]);
    for (let j = i + 1; j < str.length; j++) {
      if (set.has(str[j])) {
        break;
      }
      length++;
      set.add(str[j]);
    }
    maxLength = Math.max(maxLength, length);
  }
  return maxLength;
}

const longSubstr1 = (str = '') => {
  let length = 0;
  const map = new Map();
  let left = 0;
  for (let right = 0; right < str.length; right++) {
    const current = str[right];
    const prevSeen = map.get(current);
    if (prevSeen >= left) {
      left = prevSeen + 1;
    }
    map.set(current, right);
    length = Math.max(length, right - length + 1);
  }
}


// Contains Duplicate : Check if a value appears atleast twice

// Problem Statement: Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
//
//   Example:
//
// Example 1:
// Input: nums = [1, 2, 3, 1]
// Output: true.
//   Explanation: 1 appeared two times in the input array.
//
//   Example 2:
// Input: nums = [1, 2, 3, 4]
// Output: false
// Explanation: input array does not contain any duplicate number.


const containsDuplicate1 = (arr = []) => {

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}


const containsDuplicate2 = (arr = []) => {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      return true;
    }
  }
  return false;
}

const containsDuplicate3 = (arr = []) => {
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) return true;
    set.add(arr[i]);
  }

  return false;
}


//
// Problem Statement: Given a matrix if an element in the matrix is 0 then you will have to set its entire column and row to 0 and then return the matrix.
//
//   Examples
// Examples 1:
// Input:
//   matrix=[[1,1,1],[1,0,1],[1,1,1]]
//
// Output:
//   [[1,0,1],[0,0,0],[1,0,1]]
//
// Explanation:
//   Since matrix[2][2]=0.Therfore the 2nd column and 2nd row wil be set to 0.
//
// Input:
//   matrix=[[0,1,2,0],[3,4,5,2],[1,3,1,5]]
//
// Output:
//   [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
//
// Explanation:
//   Since matrix[0][0]=0 and matrix[0][3]=0. Therefore 1st row, 1st column and 4th column will be set to 0


const matrixZero1 = (arr = []) => {

  const markRow = (i) => {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== 0) {
        arr[i][j] = -1;
      }
    }
  }

  const markColumn = (j) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][j] !== 0) {
        arr[i][j] = -1;
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        markRow(i);
        markColumn(j);
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === -1) {
        arr[i][j] = 0;
      }
    }
  }

  return arr;
}


// Instead of traveling and marking as zero , just store respective row and column to mark as zero

//O(NXM) - O(N^2)
// O(n) + O(m)
const matrixZero2 = (arr = [], n = 0, m = 0) => {
  n = arr.length;
  m = arr[0].length;
  const col = {};
  const row = {}
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 0) {
        row[i] = 1;
        col[j] = 1;
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (row[i] || col[j]) {
        arr[i][j] = 0;
      }
    }
  }

  return arr;
}

// Reverse A Linked List
// Head will be given
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const reverseLL = (head) => {
  let temp = head;
  let prev = null

  while (temp !== null) {
    let front = temp.next;
    temp.next = prev;
    prev = temp;
    temp = front;
  }

  return prev;
}

const detectLoop = (head = new Node(null)) => {
  let current = head;
  let map = new Map();
  while (current !== null) {
    if (map.has(current)) {
      // somewhere I am in the loop
      console.log(`Loop detected at ${current.data}`)
      return true;
    }
    map.set(current, true);
    current = current.next;
  }

  return false;
}

const detectLoopFloyd = (head = new Node(null)) => {
  let slow = head, fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

// O(N) - Time
// O(N) - Space

// with a loop for testing
const head = new Node(1);
const second = new Node(2);
const third = new Node(3);
const fourth = new Node(4);
const fifth = new Node(5);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
// Create a loop
fifth.next = third;

// Check if there is a loop in the linked list
// if (detectLoopFloyd(head)) {
//   console.log("Loop detected in the linked list.");
// } else {
//   console.log("No loop detected in the linked list.");
// }


const spiralMatrix = (mat = []) => {
  const ans = [];

  let n = mat.length;
  let m = mat[0].length;

  let top = 0, left = 0, right = m - 1, bottom = n - 1;

  while (top <= bottom && left <= right) {


    for (let i = left; i <= right; i++) {
      ans.push(mat[top][i])
    }

    top++;

    for (let i = top; i <= bottom; i++) {
      ans.push(mat[i][right]);
    }

    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        ans.push(mat[bottom][i])
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        ans.push(mat[i][left]);
      }
      left++;
    }
  }

  return ans;
}

// let mat = [[1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16]];
//
// let ans = spiralMatrix(mat);
//
// for (let i = 0; i < ans.length; i++) {
//   console.log(ans[i] + " ");
// }


// Height of Binary Tree
// What traversal - Recursive ot Level Order(Queue -> Space Complexity)

// Recursive ->

// 1 + (max(left, right))

// using level order
class TreeNode {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}


const maxDepthLevel = (root = new TreeNode(null)) => {
  if (root === null) return 0;

  const queue = [];
  let level = 0;

  queue.push(root);

  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const front = queue.shift();

      if (front.left) {
        queue.push(front.left)
      }

      if (front.right) {
        queue.push(front.right)
      }
    }
    level++;
  }

  return level;
}

const maxDepthLevelRec = (root) => {
  if (root === null) return 0;

  const lh = maxDepthLevel(root.left);
  const rh = maxDepthLevel(root.right);


  return 1 + Math.max(lh, rh);
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.right.right = new TreeNode(6);
root.left.right.right.right = new TreeNode(7);
//
// const depth = maxDepthLevelRec(root);
//
// console.log("Maximum depth of the binary tree:", depth);


// Two Binary trees are identical

const identical = (node1, node2) => {
  if (node1 === null && node2 === null) return true;

  if (node1 === null || node2 === null) return false;


  return (
    node1.data === node2.data &&
    identical(node1.left, node2.left) && identical(node1.right, node2.right)
  )
}

const identicalRec = (node1, node2) => {
  const stack = [{node1, node2}]

  while (stack.length > 0) {
    const {node1, node2} = stack.pop();

    if (node1 === null && node2 === null) continue;
    if (node1 === null || node2 === null) return false;

    if (node1.data !== node2.data) return false;

    stack.push({node1: node1.left, node2: node2.left})
    stack.push({node1: node1.right, node2: node2.right})
  }

  return true;
}


const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(5);


const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);
root2.left.left = new TreeNode(4);
root2.left.right = new TreeNode(5);

//
// const ggmap = [1,2,3,4,5].reduce((previousValue, currentValue) => {
//   return previousValue.set(currentValue, true);
// }, new Map())


// Trie
// insert
// search
// starts with prefix


class Store {
  constructor() {
    this.values = [];
    this.map = new Map();
  }

  insert(value) {
    if (!this.map.has(value)) {
      this.values.push(value);
      this.map.set(value, (this.values.length - 1));
    }
  }

  remove(value) {
    if (this.map.has(value)) {
      const lastArrValue = this.values[this.values.length - 1];
      this.values[this.map.get(value)] = lastArrValue
      this.values[this.values.length - 1] = value;
      this.map.set(lastArrValue, this.map.get(value));
      this.values.pop();
      this.map.delete(value);
    }
  }
}

// const store = new Store();
// store.insert(10);
// store.insert(20);
// store.insert(30);
// console.log(store);
// store.remove(20);
// store.remove(30);
// store.remove(10);
// console.log(store);


class TrieNode {
  constructor() {
    this.links = new Array(26).fill(null);

    this.flag = false;
  }

  containsKey(char = '') {
    return this.links[char.charCodeAt(0) - 'a'.charCodeAt(0)] !== null;
  }

  put(char = '', node = new TrieNode()) {
    this.links[char.charCodeAt(0) - 'a'.charCodeAt(0)] = node;
  }

  get(char = '') {
    return this.links[char.charCodeAt(0) - 'a'.charCodeAt(0)];
  }

  setEnd() {
    this.flag = true;
  }

  isEnd() {
    return this.flag;
  }
}


class Trie {
  constructor() {
    this.root = new TrieNode();
  }


  //O(len(word))
  insert(word = '') {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!node.containsKey(word[i])) {
        // does not contains
        node.put(word[i], new TrieNode())
      }

      // move to new reference trie
      node = node.get(word[i]);
    }
    node.setEnd();
  }

  search(word = '') {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!node.containsKey(word[i])) {
        return false;
      }
      node = node.get(word[i]);
    }

    return node.isEnd();
  }

  startsWith(prefix = '') {
    let node = this.root;
    for (let i = 0; i < prefix.length; i++) {
      if (!node.containsKey(prefix[i])) {
        return false;
      }
      node = node.get(prefix[i]);
    }
    return true;
  }
}


const trie = new Trie();
trie.insert('apple');
trie.insert('apps');
trie.insert('ap');


// Implement Trie - II
//
// Problem Statement: Implement a Trie data structure that supports the following methods:
//
//   Insert (word): To insert a string `word` in the Trie.
//   Count Words Equal To (word): Return the count of occurrences of the string word in the Trie.
//   Count Words Starting With (prefix): Return the count of words in the Trie that have the string “prefix” as a prefix.
// Erase (word): Delete one occurrence of the string word from the Trie.

class TrieNode1 {
  constructor() {
    this.links = new Array(26).fill(null);
    this.endWithCount = 0;
    this.counrPrefix = 0;
  }

  containsKey(char = '') {
    return this.links[char.charCodeAt(0) - 'a'.charCodeAt(0)] !== null;
  }

  get(char) {
    return this.links[char.charCodeAt(0) - 'a'.charCodeAt(0)];
  }

  put(char = '', node = new TrieNode1()) {
    this.links[char.charCodeAt(0) - 'a'.charCodeAt(0)] = node;
  }

  increaseEnd() {
    this.endWithCount++;
  }

  increasePrefix() {
    this.counrPrefix++;
  }

  deleteEnd() {
    this.endWithCount--;
  }

  reducePrefix() {
    this.counrPrefix--;
  }

  getEnd() {
    return this.endWithCount;
  }

  getPrefix() {
    return this.counrPrefix;
  }
}

class Trie1 {
  constructor() {
    this.root = new TrieNode1();
  }


  insert(string = '') {
    let node = this.root;
    for (let i = 0; i < string.length; i++) {
      if (!node.containsKey(string[i])) {
        node.put(string[i], new TrieNode1());
      }
      node = node.get(string[i]);
      node.increasePrefix();
    }
    node.increaseEnd();
  }

  countWordsEqual(string = '') {
    let node = this.root;
    for (let i = 0; i < string.length; i++) {
      if (!node.containsKey(string[i])) {
        return 0;
      }
      node = node.get(string[i]);
    }
    return node.getEnd();
  }

  countWordStartingWith(string = '') {
    let node = this.root;

    for (let i = 0; i < string.length; i++) {
      if (!node.containsKey(string[i])) return 0;
      node = node.get(string[i]);
    }
    return node.getPrefix();
  }

  erase(string = '') {
    let node = this.root;
    for (let i = 0; i < string.length; i++) {
      if (!node.containsKey(string[i])) return null;
      node = node.get(string[i]);
      node.reducePrefix();
    }
    node.deleteEnd();
  }

  printAllWords() {
    const words = [];

    const dfs = (node = new TrieNode1(), path) => {
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

  printAllWordsBfs() {
    const queue = [{node: this.root, path: []}]
    let words = [];

    while (queue.length) {
      let {node, path} = queue.shift();
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
            path: path.concat(String.fromCharCode(i + "a".charCodeAt(0)))
          })
        }
      }
    }

    return words;
  }


  getAutoCompletionWords(string = '') {
    let node = this.root;
    let suggestions = [];
    for (let i = 0; i < string.length; i++) {
      if (!node.containsKey(string[i])) {
        return [];
      }
      node = node.get(string[i]);
    }

    // from this code do DFS/ BFS and get all the ending words
    const dfs = (node = new TrieNode1(), path) => {
      if (node.getEnd() > 0) {
        const suggestion = path.map((char) => char);
        suggestion.unshift(...string.split(''))
        suggestions.push(suggestion.join(''))
      }
      for (let i = 0; i < node.links.length; i++) {
        if (node.links[i] !== null) {
          path.push(String.fromCharCode(i + "a".charCodeAt(0)));
          dfs(node.links[i], path);
          path.pop();
        }
      }
      return suggestions;
    }
    return dfs(node, []);
  }

  getAutoCompletionWordsBfs(string = '') {
    let node = this.root;
    let suggestions = [];
    for (let i = 0; i < string.length; i++) {
      if (!node.containsKey(string[i])) {
        return [];
      }
      node = node.get(string[i]);
    }

    const queue = [{node: node, path: []}];
    while (queue.length) {
      let {node, path} = queue.shift();
      if (node.getEnd() > 0) {
        const suggestion = path.map((char) => char);
        suggestion.unshift(...string.split(''))
        suggestions.push(suggestion.join(''))
      }

      for (let i = 0; i < node.links.length; i++) {
        if (node.links[i] !== null) {
          queue.push({
            node: node.links[i],
            path: path.concat(String.fromCharCode(i + "a".charCodeAt(0)))
          })
        }
      }
    }

    return suggestions;
  }


  getAutoCompletionSiffix(string = '') {
    const suggestions = [];
    const checkSuffix = (word = '') => {
      return word.endsWith(string);
    }


    const dfs = (node = new TrieNode1(), path = []) => {
      if (node.getEnd() > 0) {
        const suggestion = path.join('');
        if (checkSuffix(suggestion)) suggestions.push(suggestion);
      }


      for (let i = 0; i < node.links.length; i++) {
        if (node.links[i] !== null) {
          path.push(String.fromCharCode(i + "a".charCodeAt(0)));
          dfs(node.links[i], path);
          path.pop();
        }
      }
    }

    dfs(this.root, []);
    return suggestions;
  }
}

const trie1 = new Trie1();
trie1.insert('vijay');
trie1.insert('vijay');
trie1.insert('apple');
trie1.insert('apps');
trie1.insert('apsop');
trie1.insert('amazon');
trie1.insert('alien');
trie1.insert('vi');


// Stack and Queue

// Stack - LIFO

// implement stack using array
// push
// top
// top


class Stack {
  constructor() {
    this.values = []
    this.top = -1;
  }

  push(value) {
    this.values[++this.top] = value
  }

  getTop() {
    return this.values[this.top];
  }

  pop() {
    this.values.pop();
    this.top--
  }

  size() {
    return this.top + 1;
  }

  isEmpty() {
    return this.top === -1;
  }
}


const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)

// console.log(stack);
// console.log(stack.getTop());
// console.log(stack.isEmpty());
// stack.pop();
// console.log(stack);
// console.log(stack.getTop());


// queue using array - Queue - FIFO

class Queue {
  constructor() {
    this.values = [];
    this.front = 0;
    this.rear = 0;
  }

  push(value) {
    this.values[this.rear] = value;
    this.rear++;
  }

  top() {
    if (this.front === this.rear) return null;
    return this.values[this.front];
  }

  pop() {
    if (this.front === this.rear) return null;
    this.values[this.front] = undefined;
    this.front++;
  }
}


// const queue = new Queue();
// queue.push(10)
// queue.push(20)
// queue.push(30)
// queue.push(40)
// console.log(queue);
// console.log(queue.pop());
// console.log(queue);
// console.log(queue.top());


// Implement Stack using single Queue
// Stack - LIFO
// Queue - FIFI
// two queues



class StackQueue {
  constructor() {

  }
}