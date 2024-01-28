class Stack {
  private values = new Map<number, any>();
  private last: number;

  constructor() {
    this.last = 0;
  }

  public size(): number {
    return this.values.size;
  }

  public push(value: any): void {
    if (!this.values.size) {
      this.values.set(0, value);
    } else {
      this.last += 1;
      this.values.set(this.last, value);
    }
  }

  public pop() {
    if (!this.values.size) {
      throw new Error("Index Error");
    } else {
      const value = this.values.get(this.last);
      if (this.values.size === 1) {
        this.last = 0;
        this.values.clear();
      } else {
        this.values.delete(this.last);
        this.last--;
      }
      return value;
    }
  }

  public peek() {
    if (!this.values.size) {
      throw new Error("Index Error");
    } else {
      const value = this.values.get(this.last);
      return value;
    }
  }
}

export default Stack;
