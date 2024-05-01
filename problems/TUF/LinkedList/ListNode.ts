export class Node {
  data: any;
  next: Node | null = null;

  constructor(val: any) {
    this.data = val;
  }
}