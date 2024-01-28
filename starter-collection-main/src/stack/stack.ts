import Stack from "../class/stack";
import { measurePerf } from "../utils/perfMeasure.utils";

async function main() {
  {
    const stack = new Stack();
    for (let i: number = 0; i < 1_000_000; i++) {
      stack.push(i);
    }
    await measurePerf("push 1", (): void => {
      stack.push(0);
    });
    await measurePerf("pop 1", (): void => {
      stack.pop();
    });
    await measurePerf("peek 1", (): void => {
      stack.peek();
    });
  }
  console.log("-------------------------");
  {
    const stack = new Stack();
    for (let i: number = 0; i < 2_000_000; i++) {
      stack.push(i);
    }
    await measurePerf("push 2", (): void => {
      stack.push(0);
    });
    await measurePerf("pop 2", (): void => {
      stack.pop();
    });
    await measurePerf("peek 2", (): void => {
      stack.peek();
    });
  }
  console.log("-------------------------");
  {
    const stack = new Stack();
    for (let i: number = 0; i < 3_000_000; i++) {
      stack.push(i);
    }
    await measurePerf("push 3", (): void => {
      stack.push(0);
    });
    await measurePerf("pop 3", (): void => {
      stack.pop();
    });
    await measurePerf("peek 3", (): void => {
      stack.peek();
    });
  }
}
main();
