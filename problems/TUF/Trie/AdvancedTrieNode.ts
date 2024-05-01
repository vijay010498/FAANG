export class Node {
  links: Node[] | null[] = new Array(26).fill(null);
  prefixCount: number = 0;
  endCount: number = 0;

  containsKey(char: string): boolean {
    return this.links[char.charCodeAt(0) - 'a'.charCodeAt(0)] !== null;
  }

  put(char: string, node: Node): void {
    this.links[char.charCodeAt(0) - 'a'.charCodeAt(0)] = node;
  }

  get(char: string): Node {
    return this.links[char.charCodeAt(0) - 'a'.charCodeAt(0)]
  }

  increasePrefix(): void {
    this.prefixCount++;
  }

  decreasePrefix(): void {
    this.prefixCount--;
  }

  increaseEnd(): void {
    this.endCount++;
  }

  decreaseEnd(): void {
    this.endCount--;
  }

  getPrefix(): number {
    return this.prefixCount;
  }

  getEnd(): number {
    return this.endCount;
  }

}