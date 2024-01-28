class Node {
  public data: any;
  public next: Node | null;

  constructor(data: any) {
    this.data = data;
    this.next = null;
  }
}

export default Node;
