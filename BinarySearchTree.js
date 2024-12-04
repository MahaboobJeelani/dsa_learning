class Node {
    constructor(value) {
        this.value = value
        this.right = null
        this.left = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        // this code is for insert the left value which means lesser then the parent node 
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        }
        // this code is for insert the right value which means greater then the parent node 
        else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false
        } else {
            if (root.value === value) {
                return true
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }

    levelOrder() {
        let queue = [];
        queue.push(this.root);

        while (queue.length) {
            let curr = queue.shift();
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }

    min(root) {
        if (!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    max(root) {
        if (!root.right) {
            return root.value
        } else {
            return this.max(root.right)
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        // if the root or top parent is empty return null
        if (!root === null) {
            return root
        }
        // if the user sended value is lesser then the root value then assign the value in root left
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        }
        // if the user sended value is greater then the root value then assign the value in root rigth
        else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            // it checks the left and rigth values are not present retun null
            if (!root.left && !root.right) {
                return null
            }
            // if the root left value is not present and root rigth values is present, return the root.rigth
            if (!root.left) {
                return root.right
            }
            // if the root rigth value is not present and root left values is present, return the root.left
            else if (!root.right) {
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.left)
        }
        return root
    }
}

const bst = new BinarySearchTree();
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
// bst.insert(7)

// console.log(bst.isEmpty());

// console.log(bst.search(bst.root, 60));
// bst.levelOrder()
// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));

bst.delete(3)
bst.levelOrder()






