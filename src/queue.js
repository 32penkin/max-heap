const MaxHeap = require('./max-heap.js');

class PriorityQueue {
  constructor(maxSize) {
    if( maxSize ) {
      this.maxSize = maxSize;
    }
    else {
      this.maxSize = 30;
    }
    this.heap = new MaxHeap();
    this.queueSize = 0;
  }
  
  push(data, priority) {
    if (this.queueSize < this.maxSize) {
      this.heap.push(data, priority);
      this.queueSize++;
    } else {
      throw 'queue has max size';
    }
  }
  
  shift() {

    this.queueSize--;
  }
  
  size() {
    return this.queueSize;
  }
  
  isEmpty() {
    return this.queueSize == 0;
  }
}

module.exports = PriorityQueue;
