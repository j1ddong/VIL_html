import Queue from "../class/queue2";

const q = new Queue();
q.enque(1);
q.enque(2);
q.enque(3);
console.log(q.size());
console.log(q.peek());
console.log(q.deque());
console.log(q.deque());
console.log(q.deque());
q.enque(1);
console.log(q.deque());
