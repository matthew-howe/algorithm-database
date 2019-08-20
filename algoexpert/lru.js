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
        this.maxSize = maxSize || 1;
        this.currentSize = 0;
        this.listOfMostRecent = newDoublyLinkedList(); 
        // linked list functioning as a queue of the 
        // last recently used
    }

    // O(1) time | O(1) space
    insertKeyValuePair(key, value) {
        if (!(key in this.cache)) {
            if (this.currentSize === this.maxSize) {
                this.evictLeastRecent();
            } else {

                this.currentSize++;
            }
            this.cache[key] = new DoublyLinkedListNode(key, value);
        } else { 

            this.replaceKey(key, value); 
        }

        this.updateMostRecent(this.cache[key]);
    }

    // O(1) time | O(1) space
    getValueFromKey(key) {
        if (!(key in this.cache)) return null;
        
        this.updateMostRecent(this.cache[key]);

        return this.cache[key].value;
    }

    // O(1) time | O(1) space
    getMostRecentKey() {
        return this.listOfMostRecent.head.key;
    }

    evictLeastRecent() {
        const keyToRemove = this.listOfMostRecent.tail.key;
        this.listOfMostRecent.removeTail();
        delete this.cache[keyToRemove];
    }

    updateMostRecent(node) {
        this.listOfMostRecent.setHeadTo(node);
    }

    replaceKey(key, value) {
    }
}

class LRUCache2 {
  constructor(maxSize) {
    this.maxSize = maxSize || 1;
		this.queue = [];
		this.hash = {};
  }

  insertKeyValuePair(key, value) {
		if (this.queue.length < this.maxSize) {
            this.queue.unshift(key);
            this.hash[key] = value;
        } else {
            let least = this.queue.pop();
            delete this.hash[least];
            this.queue.unshift(key);
            this.hash[key] = value;
        }
  }

  getValueFromKey(key) {
    let index = this.queue.indexOf(key);
		this.queue.splice(index, 1);
		this.queue.unshift(key);
		return this.hash[key];
  }

  getMostRecentKey() {
    
		return this.queue[0];
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
