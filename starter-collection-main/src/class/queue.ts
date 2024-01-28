class Queue {
  private values = new Map<number, any>();
  private first: number;
  private last: number;

  constructor() {
    this.first = 0;
    this.last = 0;
  }

  public size(): number {
    return this.values.size;
  }

  public enque(value: any): void {
    if (!this.values.size) {
      this.values.set(0, value);
    } else {
      this.last += 1;
      this.values.set(this.last, value);
    }
  }

  public deque() {
    if (!this.values.size) {
      throw new Error("Index Error");
    } else {
      const value = this.values.get(this.first);
      if (this.values.size === 1) {
        this.first = 0;
        this.last = 0;
        this.values.clear();
      } else {
        this.values.delete(this.first);
        this.first++;
      }
      return value;
    }
  }

  public peek() {
    if (!this.values.size) {
      throw new Error("Index Error");
    } else {
      const value = this.values.get(this.first);
      return value;
    }
  }
}

export default Queue;
