"use strict"

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const newNode = new Node(key);
    if (this.root === null) 
      this.root = newNode;
    else 
      this._insertNode(this.root, newNode);
  }
  
  _insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null)
        node.left = newNode;
      else 
        this._insertNode(node.left, newNode);
    }

    else {
      if (node.right === null) 
        node.right = newNode;
      else 
        this._insertNode(node.right, newNode);
    }
  }
  
  search(key) {
    return this._searchNode(this.root, key);
  }
  
  _searchNode(node, key) {
    if (node === null) 
      return false;

    if (key < node.key) 
      return this._searchNode(node.left, key);
    else if (key > node.key) 
      return this._searchNode(node.right, key);
    else 
      return true;

  }
}


module.exports = BinarySearchTree;