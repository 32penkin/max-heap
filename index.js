const MaxHeap = require('./src/max-heap');

const Node = require('./src/node');
const Queue = require('./src/queue');

const h = new MaxHeap();
window.h = h;






let node1 = new Node(44, 0);
let node2 = new Node(22, 1);
node1.appendChild(node2);
// node1.removeChild(node2);
node2.swapWithParent();

console.log(node1);
console.log(node2);