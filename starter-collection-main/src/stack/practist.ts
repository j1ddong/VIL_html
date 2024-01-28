import Stack from "../class/stack";

const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
console.log(s.size());
console.log(s.peek());
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
s.push(1);
console.log(s.pop());
