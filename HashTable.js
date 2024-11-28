class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value) {
        const index = this.hash(key)
        // this.table[index] = value
        const bucket = this.table[index]
        if (!bucket) {
            this.table[index] = [[key, value]]
        } else {
            const sameKeyItem = bucket.find(item => item[0] === key) // item[0] key present in index "0" and value present present in index "1"
            if (sameKeyItem) sameKeyItem[1] = value
            else bucket.push([key, value])
        }
    }

    get(key) {
        const index = this.hash(key)
        // return this.table[index]

        const bucket = this.table[index]
        if (bucket) {
            const someKeyItem = bucket.find(item => item[0] === key)
            if (someKeyItem) {
                return someKeyItem
            }
        }
        return undefined
    }

    remove(key) {
        const index = this.hash(key);
        // this.table[index] = undefined
        const bucket = this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem){
                bucket.slice(bucket.indexOf(sameKeyItem), 1)
            }
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}

const hash = new HashTable(50)

hash.set("name", "jee");
hash.set("age", 25)

// hash.display()

console.log(hash.get("age"));
hash.remove("name")
// hash.display()

// hash.set("mane", "Basha")
hash.display()




