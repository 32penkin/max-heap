class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
    this.parent = null;
    this.left = null;
    this.right = null;
  }

  appendChild(node) {
    if (this.left == null) {
      this.left = node;
    }
    else if (this.right == null) {
      this.right = node;
    }
    node.parent = this;
  }

  removeChild(node) {
    node.parent = null;
    if (this.left == node) {
      this.left = null;
    }
    else if (this.right == node) {
      this.right = null;
    }
    else {
      throw 'node is not a child of this node';
    }

  }

  remove() {
    if (this.parent == null) {
      return;
    }
    this.parent.removeChild(this);
  }

  swapWithParent() {
    if (this.parent == null) {
      return;
    }

    let that = this;
    let parent = this.parent;
    let parentsParent = parent.parent;
    let leftChild = this.left;
    let rightChild = this.right;
    let isThisParentsLeftChild = parent.left == this;
    let secondParentsChild = isThisParentsLeftChild ? parent.right : parent.left;

    this.parent.remove();
    this.remove();

    if (parentsParent != null) {
      parentsParent.appendChild(that);
    }

    if (secondParentsChild != null) {
      if (isThisParentsLeftChild) {
        that.right = secondParentsChild;
        that.left = null;
      } else {
        that.left = secondParentsChild;
        that.right = null;
      }
      secondParentsChild.parent = that;
    }

    that.appendChild(parent);

    if (leftChild != null) {
      parent.left = leftChild;
      leftChild.parent = parent;
    } else {
      parent.left = null;
    }

    if (rightChild != null) {
      parent.right = rightChild;
      rightChild.parent = parent;
    } else {
      parent.right = null;
    }

  }

}

module.exports = Node;