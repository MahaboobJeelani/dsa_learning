// //  this file is linked with the LinkedList.js
const LinkedList = require('../DSA/LinkedList')

// class LinkedListStack {
//     constructor() {
//         this.list = new LinkedList()
//     }

//     push(value) {
//         this.list.prepend(value)
//     }

//     pop() {
//         return this.list.removeFromEnd()
//     }

//     peek() {
//         return this.head.value
//     }

//     isEmpty() {
//         return this.list.isEmpty()
//     }

//     getSize() {
//         return this.list.getSize()
//     }

//     print() {
//         return this.list.print()
//     }
// }

// const stackList = new LinkedListStack()
// console.log(stackList.isEmpty());

// stackList.push(10)
// stackList.print()
// stackList.pop()
// stackList.print()
// console.log(stackList.getSize());





class LinkedListQueue {
    constructor() {
        this.list = new LinkedList()
    }

    enqueue(value) {
        this.list.append(value)
    }
    dequeue() {
        return this.list.removeFromFront()
    }
    peek() {
        return this.list.head.value
    }
    isEmpty() {
        return this.list.isEmpty()
    }
    getSize() {
        return this.list.getSize()
    }
    print() {
        return this.list.print()
    }
}

const queue = new LinkedListQueue();

console.log(queue.isEmpty());
queue.enqueue(10)
queue.print()
// queue.dequeue()
// queue.print()
console.log(queue.peek());

// console.log(queue.getSize());

