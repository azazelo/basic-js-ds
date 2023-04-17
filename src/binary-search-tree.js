const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.BinarySearchTree=[];
    this.BinarySearchTree[0]
   }
  root() {
    if(this.BinarySearchTree[0]===undefined){
      return null
    }
    else{
      this.BinarySearchTree[0]
    }
  }

  add( data ) {
   this.BinarySearchTree.push(data);
  }

  has( data ) {
    if(this.BinarySearchTree.indexOf(data)===1){
      return true
    }
    else{
      return false
    }
  }

  find( data ) {
    if(this.BinarySearchTree.indexOf(data)>-1){
      return this.BinarySearchTree[1]
    }
    else{
      return null
    }
  }

  remove( data ) {
    this.BinarySearchTree.filter(a => a !== data)
  }

  min() {
    return Math.min.apply(null,this.BinarySearchTree)
  }

  max() {
    return Math.max.apply(null,this.BinarySearchTree)
  }
}

module.exports = {
  BinarySearchTree
};