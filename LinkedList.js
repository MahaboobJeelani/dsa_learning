class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let pre = this.head;
            for (let i = 0; i < index - 1; i++) {
                pre = pre.next
            }
            node.next = pre.next;
            pre.next = node
            this.size++
        }
    }
    // O(n)  adding value at last
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    //O(1) Adding value at first 
    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    removeFromIndex(index) {
        if (index < 0 || index >= this.size) {
            return null
        }
        let removeNode;
        if (index === 0) {
            removeNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.value
    }

    removeFromValue(value) {
        if (this.isEmpty()) {
            return null
        }
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        }
        else {
            let prev = this.head;
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if (prev.next) {
                removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return value
            }
            return null
        }
    }

    search(value) {
        if (this.isEmpty()) {
            return -1
        }
        let i = 0;
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                return i
            } else {
                curr = curr.next
                i++
            }
        }
        return -1
    }

    reverse() {
        if (this.isEmpty()) {
            return null
        }

        let prev = null
        let curr = this.head;
        while (curr) {
            let next = curr.next;
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }


    print() {
        if (this.isEmpty()) { console.log("Linked list is empty"); }
        else {
            let curr = this.head
            let listValue = ''
            while (curr) {
                listValue += `${curr.value} `
                curr = curr.next
            }
            console.log(listValue);
        }
    }
}

const linkedlist = new LinkedList();

console.log(linkedlist.isEmpty());
console.log(linkedlist.getSize());
linkedlist.print()

linkedlist.append(10)
linkedlist.append(20)
linkedlist.append(30)
linkedlist.append(40)
linkedlist.print()


// linkedlist.insert(10, 0)
// linkedlist.print()

// linkedlist.insert(20, 0)
// linkedlist.print()

// linkedlist.insert(30, 1)
// linkedlist.print()

// linkedlist.insert(40, 2)
// linkedlist.print()


// linkedlist.print()
// console.log(linkedlist.getSize());

linkedlist.print()
// console.log(linkedlist.getSize());

// console.log(linkedlist.search(30));

// linkedlist.print()

linkedlist.reverse()
linkedlist.print()

