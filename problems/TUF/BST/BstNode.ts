export class Node {
  data: any;
  left: Node | null = null;
  right: Node | null = null;

  constructor(data: any) {
    this.data = data;
  }
}