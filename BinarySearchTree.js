class Node{
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === null
    }
}

const bst = new BinarySearchTree();
console.log(bst.isEmpty());
