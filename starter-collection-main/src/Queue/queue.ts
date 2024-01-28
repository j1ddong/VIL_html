import Queue from "../class/queue";
import { measurePerf } from "../utils/perfMeasure.utils";

async function main() {
  {
    const queue = new Queue();
    for (let i: number = 0; i < 1_000_000; i++) {
      queue.enque(i);
    }
    await measurePerf("enqueue 1", (): void => {
      queue.enque(0);
    });
    await measurePerf("dequeue 1", (): void => {
      queue.deque();
    });
    await measurePerf("peek 1", (): void => {
      queue.peek();
    });
  }
  console.log("-------------------------");
  {
    const queue = new Queue();
    for (let i: number = 0; i < 2_000_000; i++) {
      queue.enque(i);
    }
    await measurePerf("enqueue 2", (): void => {
      queue.enque(0);
    });
    await measurePerf("dequeue 2", (): void => {
      queue.deque();
    });
    await measurePerf("peek 2", (): void => {
      queue.peek();
    });
  }
  console.log("-------------------------");
  {
    const queue = new Queue();
    for (let i: number = 0; i < 3_000_000; i++) {
      queue.enque(i);
    }
    await measurePerf("enqueue 3", (): void => {
      queue.enque(0);
    });
    await measurePerf("dequeue 3", (): void => {
      queue.deque();
    });
    await measurePerf("peek 3", (): void => {
      queue.peek();
    });
  }
}
main();
