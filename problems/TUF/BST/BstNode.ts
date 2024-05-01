export class Node {
  data: number;
  left: Node | null = null;
  right: Node | null = null;
  realValue: any;

  constructor(data: number, realValue: any) {
    this.data = data;
    this.realValue = realValue;
  }
}