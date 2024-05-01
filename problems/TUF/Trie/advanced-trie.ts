import {Node} from "./AdvancedTrieNode";

class Trie {
  private root: Node = new Node();

  insert(word: string): Trie {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!node.containsKey(char)) {
        node.put(char, new Node());
        node.increasePrefix();
      }
      node = node.get(char);
    }
    node.increaseEnd();
    return this;
  }

  delete(word: string): Trie {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!node.containsKey(char)) {
        return this;
      }
      node = node.get(char);
      node.decreasePrefix();
    }
    node.decreaseEnd();
    return this;
  }


  printAllWords(): Trie {
    const words: string[] = [];
    const dfs = (node: Node, path: string[]) => {
      if (node.getEnd() > 0) {
        const word = path.join('');
        words.push(word);
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
    console.table(words);
    return this;
  }

}


const trie = new Trie();
trie.insert('aa');
trie.insert('ab');
trie.printAllWords();