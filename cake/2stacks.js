//  Implement the enqueue and dequeue methods

class QueueTwoStacks {
    constructor() {
        this.s1 = [];
        this.s2 = [];
    }

        
    enqueue(item) {
        this.s1.push(item);
    }

    dequeue() {
        if (this.s2.length === 0) {

            while (this.s1.length) {
                let moveToS2 = this.s1.pop()
                this.s2.push(moveToS2);
            }

            return this.s2.pop();
        } else if (this.s2.length === 0 && this.s1.length === 0) {
            throw new Error('queue is empty')
        } else {
            return this.s2.pop();
        }

    }
}


















// Tests
const q = new QueueTwoStacks();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

let desc = 'dequeue #1';
let actual = q.dequeue();
let expected = 1;
assertEquals(actual, expected, desc);

desc = 'dequeue #2';
actual = q.dequeue();
expected = 2;
assertEquals(actual, expected, desc);

q.enqueue(4);

desc = 'dequeue #3';
actual = q.dequeue();
expected = 3;
assertEquals(actual, expected, desc);

desc = 'dequeue #4';
actual = q.dequeue();
expected = 4;
assertEquals(actual, expected, desc);

desc = 'dequeue from empty queue';
const emptyDequeue = () => q.dequeue();
assertThrowsError(emptyDequeue, desc);

function assertEquals(a, b, desc) {
    if (a === b) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
}

function assertThrowsError(func, desc) {
    try {
        func();
        console.log(`${desc} ... FAIL`);
    } catch (e) {
        console.log(`${desc} ... PASS`);
    }
}
