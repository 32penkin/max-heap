const MaxHeap = require('./src/max-heap');

const Node = require('./src/node');
const Queue = require('./src/queue');

const h = new MaxHeap();
window.h = h;




let node1 = new Node(44, 22);
let node2 = new Node(22, 1);
let node3 = new Node(55, 3);
let node4 = new Node(22, 0);



let heap1 = new MaxHeap();
heap1.push(44, 22);
heap1.push(22, 1);
heap1.push(55, 3);
heap1.push(22, 0);

// console.log(heap1);

// console.log(heap1.detachRoot());
console.log(heap1);
console.log(heap1.size());