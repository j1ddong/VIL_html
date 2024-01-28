import Node from "./node";

class Stack {
  private last: Node | null;
  private length: number;

  constructor() {
    this.last = null;
    this.length = 0;
  }

  public size(): number {
    return this.length;
  }

  public push(value: any): void {
    const newNode = new Node(value);
    newNode.next = this.last;
    this.last = newNode;
    this.length++;
  }

  public pop() {
    if (this.last !== null) {
      const value = this.last.data;
      const next = this.last.next;
      this.last = next;
      return value;
    } else {
      throw new Error("Index Error");
    }
  }

  public peek() {
    if (this.last !== null) {
      const value = this.last.data;
      return value;
    } else {
      throw new Error("Index Error");
    }
  }
}

export default Stack;
