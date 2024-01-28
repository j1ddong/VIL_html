import Node from "./node";

class Queue {
  private first: Node | null;
  private last: Node | null;
  private length: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  public size(): number {
    return this.length;
  }

  public enque(value: any): void {
    const newNode = new Node(value);
    this.length++;
    if (this.last !== null) {
      this.last.next = newNode;
      this.last = newNode;
    } else {
      this.first = newNode;
      this.last = newNode;
    }
  }

  public deque() {
    if (this.first !== null) {
      this.length--;
      const value = this.first.data;
      const next = this.first.next;
      if (next === null) {
        this.last = null;
      }
      this.first = next;
      return value;
    } else {
      throw new Error("Index Error");
    }
  }

  public peek() {
    if (this.first !== null) {
      const value = this.first.data;
      return value;
    } else {
      throw new Error("Index Error");
    }
  }
}

export default Queue;
