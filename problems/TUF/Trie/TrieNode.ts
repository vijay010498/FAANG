export class Node {
  links: Node[] | null[] = [];
  private flag: boolean = false;

  constructor() {
    this.links = new Array(26).fill(null);
  }

  containsKey(char: string): boolean {
    return this.links[char.charCodeAt(0) - 'a'.charCodeAt(0)] !== null;
  }


  put(char: string, node: Node): void {
    this.links[char.charCodeAt(0) - 'a'.charCodeAt(0)] = node;
  }

  get(char: string): Node | null {
    return this.links[char.charCodeAt(0) - 'a'.charCodeAt(0)];
  }

  setEnd(): void {
    this.flag = true;
  }

  getEnd(): boolean {
    return this.flag;
  }
}