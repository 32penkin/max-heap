const Node = require('./node');

class MaxHeap {

  constructor() {
    this.root = null;
    this.parentNodes = [];
    this.heapSize = 0;
  }

  push(data, priority) {
    let node = new Node(data,priority);
    this.insertNode(node);
    this.shiftNodeUp(node);
    this.heapSize ++;
  }

  pop() {
    if(this.isEmpty()){
      return;
    }
    let detached =  this.detachRoot();
    if(this.isEmpty()){
      return detached.data;
    }
    this.restoreRootFromLastInsertedNode(detached);
    this.shiftNodeDown(this.root);
    this.heapSize --;
    return detached.data;
  }

  detachRoot() {
    let root = this.root;
    let rootIndex = this.parentNodes.indexOf(root);
    if(rootIndex >= 0){
      this.parentNodes.splice(rootIndex, 1);
    }
    this.root = null;
    return root;
  }

  restoreRootFromLastInsertedNode(detached) {
    if(typeof detached.data === 'undefined'){
      return;
    }
    let lastInsertedElement = this.parentNodes.pop();
    let lastInsertedElementParent = lastInsertedElement.parent;

    if(lastInsertedElementParent.left == lastInsertedElement){
      lastInsertedElementParent.left = null;
    }else{
      lastInsertedElementParent.right = null;
    }
    this.root = lastInsertedElement;
    this.root.parent = null;

    if(detached.left !=	lastInsertedElement){
      lastInsertedElement.left = detached.left;
      if(lastInsertedElement.left != null){
        lastInsertedElement.left.parent = lastInsertedElement;
      }
    }
    if(detached.right != lastInsertedElement){
      lastInsertedElement.right = detached.right;
      if(lastInsertedElement.right != null){
        lastInsertedElement.right.parent = lastInsertedElement;
      }
    }

    if(lastInsertedElementParent != detached){
      this.parentNodes.unshift(lastInsertedElementParent);
    }
    this.parentNodes.unshift(lastInsertedElement);

    if(this.root.left != null && this.root.right != null){
      this.parentNodes.shift();
    }
  }

  size() {
    if(this.isEmpty()){
      return 0;
    } else {
      return this.heapSize;
    }
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
    if(this.root == null){
      this.root = node;
    }else{
      this.parentNodes[0].appendChild(node);
    }
    this.parentNodes.push(node);
    if(this.parentNodes[0].left != null && this.parentNodes[0].right != null){
      this.parentNodes.shift();
    }
  }


  shiftNodeUp(node) {
    if (node.parent == null) {
      this.root = node;
    }
    else if (node.parent != null && node.parent.priority < node.priority) {
      let parent = node.parent;
      let indexOfNode = this.parentNodes.indexOf(node);
      let indexOfParentNode = this.parentNodes.indexOf(parent);
      if (indexOfNode >= 0) {
        this.parentNodes[indexOfNode] = parent;
      }
      if (indexOfParentNode >= 0) {
        this.parentNodes[indexOfParentNode] = node;
      }
      node.swapWithParent();
      this.shiftNodeUp(node);
    }
  }


    shiftNodeDown(node) {
    let shiftingChild = null;
    if (node.left != null && node.priority < node.left.priority) {
      shiftingChild = node.left;
    } else if (node.right != null && node.priority < node.right.priority) {
      shiftingChild = node.right;
    } else {
      shiftingChild = null;
    }

    if (shiftingChild != null) {
      shiftingChild.swapWithParent();

      if (this.root == node) {
        this.root = shiftingChild;
      }

      let shiftingChildIndex = this.parentNodes.indexOf(shiftingChild);
      let nodeIndex = this.parentNodes.indexOf(node);

      this.parentNodes[shiftingChildIndex] = node;
      this.parentNodes[nodeIndex] = shiftingChild;
      this.shiftNodeDown(node);
    }
  }
}

module.exports = MaxHeap;
