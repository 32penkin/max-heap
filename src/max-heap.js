const Node = require('./node');

class MaxHeap {
  constructor() {
    this.root = null;
    this.parentNodes = [];
    this.heapSize = 0;
  }
  
  push(data, priority) {
    let node = new Node(data, priority);
    this.insertNode(node);
    this.shiftNodeUp(node);

    this.heapSize++;
  }
  
  pop() {


    this.heapSize--;
  }
  
  detachRoot() {

  }
  
  restoreRootFromLastInsertedNode(detached) {

  }
  
  size() {
    return this.heapSize;
  }
  
  isEmpty() {
    return this.parentNodes.length == 0;
  }
  
  clear() {
    this.root = null;
    this.parentNodes = [];
    this.heapSize = 0;
  }
  
  insertNode(node) {
    if(this.root == null) {
      this.root = node;
    }
    else {
      this.parentNodes[0].appendChild(node);
    }
    this.parentNodes.push(node);
    if(this.parentNodes[0].left != null && this.parentNodes[0].right != null) {
      this.parentNodes.shift();
    }
  }
  
  shiftNodeUp(node) {
    if(node.parent == null){
      this.root = node;
      return;
    }
    if(node.parent.priority >= node.priority){
      return;
    }
    if(this.parentNodes.length != 0){
      let nodeIndex = this.parentNodes.indexOf(node);
      let nodeParentIndex = this.parentNodes.indexOf(node.parent);
      if(nodeIndex != -1){
        if(nodeParentIndex != -1){
          this.parentNodes[nodeParentIndex] = node;
        }
        this.parentNodes[nodeIndex] = node.parent;
      }
    }
    node.swapWithParent();
    this.shiftNodeUp(node);
  }
  
  shiftNodeDown(node) {

  }
  
  replaceNode(node, childNode) {

  }
}

module.exports = MaxHeap;
