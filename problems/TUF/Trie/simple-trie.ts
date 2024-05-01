import {Node} from "./TrieNode";

class Trie {
  private readonly root: Node;

  constructor() {
    this.root = new Node();
  }

  insert(word: string): Trie {
    let node: Node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!node.containsKey(word[i])) {
        node.put(word[i], new Node());
      }
      node = node.get(word[i]);
    }
    node.setEnd();
    return this;
  }


  search(word: string): boolean {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!node.containsKey(word[i])) return false;
      node = node.get(word[i]);
    }
    return node.getEnd();
  }


  startsWith(word: string): boolean {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!node.containsKey(word[i])) return false;
      node = node.get(word[i]);
    }
    return true;
  }

  printAllWords(): void {
    const dfs = (node: Node, path: string[]): void => {
      if (node.getEnd()) {
        console.log(path.join(''));
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
  }

  printAllWordsBfs(): void {
    const queue: { node: Node; path: string[] }[] = [{node: this.root, path: []}];
    while (queue.length) {
      const {node, path}: { node: Node, path: string[] } = queue.shift();
      if (node.getEnd()) {
        console.log(path.join(''));
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
  }
}


const trie = new Trie();
trie.insert('apple')
trie.insert('apps')
trie.insert('banana')
trie.insert('baps')

console.log(trie.search('apps'))
console.log(trie.startsWith('apssss'))
trie.printAllWords()