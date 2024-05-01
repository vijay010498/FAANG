export class Node {
  private data: any;
  private next: Node | null = null;

  constructor(val: any) {
    this.data = val;
  }
}