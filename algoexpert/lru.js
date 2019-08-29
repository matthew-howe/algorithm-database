const letterMaps = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    x: 5,
    f: 6,
    g: 7,
    h: 8,
    j: 9
}

const letters = ['a', 'b', 'c', 'd', 'e', 'x', 'f', 'g', 'h', 'j']

class LRUCache {
    constructor (maxSize) {
        this.cache = {}; // hash of all the keys and their values
        this.maxSize = maxSize || 1; // maximum size of the cache
        this.currentSize = 0; // current size of the cache
        this.listOfMostRecent = new DoublyLinkedList();
        // linked list functioning as a queue of the 
        // last recently used
    }

    // O(1) time | O(1) space
    insertKeyValuePair(key, value) {
        if (!(key in this.cache)) { // if the key isn't in the cache
            if (this.currentSize === this.maxSize) { // and the cache is full
                this.evictLeastRecent(); // evict the least recently used
            } else {

                this.currentSize++; // if it's not full increase the size pointer
            }
            this.cache[key] = new DoublyLinkedListNode(key, value); // add the node to the cache
        } else { 

            this.replaceKey(key, value); // if the key is already in the cache call our replace function on it
        }

        this.updateMostRecent(this.cache[key]); // update the cache to reflect our latest read/write
    }

    // O(1) time | O(1) space
    getValueFromKey(key) {
        if (!(key in this.cache)) return null;
        
        this.updateMostRecent(this.cache[key]); // update the cache to reflect our latest read/write
        return this.cache[key].value; // return the value of the key in the cache
    }

    // O(1) time | O(1) space
    getMostRecentKey() {
        return this.listOfMostRecent.head.key; // the most recent key is the head of the linked list
    }

    evictLeastRecent() { // the tail is the least recently used
        const keyToRemove = this.listOfMostRecent.tail.key; // extract the key from the tail
        this.listOfMostRecent.removeTail(); // call our remove tail function
        delete this.cache[keyToRemove]; // delete the key from our cache
    }

    updateMostRecent(node) {
        this.listOfMostRecent.setHeadTo(node); // set the head of the linked list toThe given node
    }

    replaceKey(key, value) {

        if (!(key in this.cache)) {
            throw new Error("The provided key isn't in the cache!");
        }

        this.cache[key].value = value;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    setHeadTo(node) {
        if (this.head === node) return;

        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else if (this.head === this.tail) {
            this.tail.prev = node;
            this.head = node;
            this.head.next = this.tail;
        } else {
            if (this.tail === node) this.removeTail();
            node.removeBindings();
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
    }

    removeTail() {
        if (this.tail === null) return;
        if (this.tail === this.head) {
            this.head = null;
            this.tail = null;
            return;
        }
        this.tail = this.tail.prev;
        this.tail.next = null;
    }
}

class DoublyLinkedListNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }

    removeBindings() {
        if (this.prev !== null) {
            this.next.prev = this.prev;
        }
    }
}




let lru = new LRUCache(9);
lru.insertKeyValuePair('a', 1);

for (let i = 1; i < 10; i++) {
    const mostRecentLetter = letters[i - 1]
    console.log('mostRecentLetter', mostRecentLetter,
        'mostRecentKey', lru.getMostRecentKey());

    console.log('inserting: ', letters[i], letterMaps[letters[i]])
    lru.insertKeyValuePair(letters[i], letterMaps[letters[i]]);


}

lru.insertKeyValuePair('z', 50);
lru.insertKeyValuePair('x', 9000);

console.log(lru);
