class Queue {
    constructor() {
        this.queue = [];
        this.size = 0;
    }

    enqueue(item) {
        this.queue.unshift(item);
        this.size += 1;
    }

    dequeue() {
        this.size -= 1;
        return this.queue.pop();
    }
}

function helper(network, startNode, endNode) {
    let reversedPath = [];
    let currentNode = endNode;

    while (currentNode !== null) {

        reversedPath.push(currentNode)
        currentNode = network[currentNode]
    }

    return reversedPath.reverse();
}


function getPath(graph, startNode, endNode) {

    if (!graph[startNode] || !graph[endNode]) {
        throw new Error('Invalid Input');
    }

    // keep track of the nodes to visit
    const nodesToVisit = new Queue(); 
    nodesToVisit.enqueue(startNode);

    // keep track of how we reached each node
    const howWeReachedNodes = {}
    howWeReachedNodes[startNode] = null;


    while (nodesToVisit.size > 0) {
        let currentNode = nodesToVisit.dequeue();
        if (currentNode === endNode)  {

            return helper(howWeReachedNodes, startNode, endNode)
        }

        for (const neighbor of graph[currentNode]) {
            if (!howWeReachedNodes.hasOwnProperty(neighbor)) {

                nodesToVisit.enqueue(neighbor);

                // keep track of how we found the node
                howWeReachedNodes[neighbor] = currentNode;
            }
        }
    }

    return null;
}


















// Tests
const graph = {
    'a': ['b', 'c', 'd'],
    'b': ['a', 'd'],
    'c': ['a', 'e'],
    'd': ['a', 'b'],
    'e': ['c'],
    'f': ['g'],
    'g': ['f']
};

let desc = 'two hop path 1';
let actual = getPath(graph, 'a', 'e');
let expected = ['a', 'c', 'e'];
assertDeepEqual(actual, expected, desc);

desc = 'two hop path 2';
actual = getPath(graph, 'd', 'c');
expected = ['d', 'a', 'c'];
assertDeepEqual(actual, expected, desc);

desc = 'one hop path 1';
actual = getPath(graph, 'a', 'c');
expected = ['a', 'c'];
assertDeepEqual(actual, expected, desc);

desc = 'one hop path 2';
actual = getPath(graph, 'f', 'g');
expected = ['f', 'g'];
assertDeepEqual(actual, expected, desc);

desc = 'one hop path 3';
actual = getPath(graph, 'g', 'f');
expected = ['g', 'f'];
assertDeepEqual(actual, expected, desc);

desc = 'zero hop path';
actual = getPath(graph, 'a', 'a');
expected = ['a'];
assertDeepEqual(actual, expected, desc);

desc = 'no path';
actual = getPath(graph, 'a', 'f');
expected = null;
assertDeepEqual(actual, expected, desc);

desc = 'start node not present';
assertThrowsError(() => {
    getPath(graph, 'h', 'a');
}, desc);

desc = 'end node not present';
assertThrowsError(() => {
    getPath(graph, 'a', 'h');
}, desc);

function assertDeepEqual(a, b, desc) {
    const aStr = JSON.stringify(a);
    const bStr = JSON.stringify(b);
    if (aStr !== bStr) {
        console.log(`${desc} ... FAIL: ${aStr} != ${bStr}`);
    } else {
        console.log(`${desc} ... PASS`);
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
