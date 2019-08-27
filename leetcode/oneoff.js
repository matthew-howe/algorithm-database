
// initialize hash where each key is a character
// each character has a key for arrA or arrB
// 
// loop through the hash and return the total differences between
// a and b

const oneOff = (arrA, arrB) => {
    const differences = [];

    for (let i = 0; i < arrA.length; i++) {
        differences.push(checker(arrA[i], arrB[i]))
    }

    return differences;
}

function checker(a, b) {
    if (a.length !== b.length) return -1;

    let diff = 0;
    const unordered_map = {};

    for (let j = 0; j < a.length; j++) {
        let curA = a[j];
        if (unordered_map[curA]) unordered_map[curA].a++
        else unordered_map[curA] = { a: 1, b: 0 };

        let curB = b[j];
        if (unordered_map[curB]) unordered_map[curB].b++
        else unordered_map[curB] = { a: 0, b: 1 };
    }

    for (let key in unordered_map) {
        let curDiff = Math.abs(unordered_map[key].a - unordered_map[key].b)
        diff += curDiff / 2
    }

    return diff;
}

console.log(oneOff(
    ["a", "jk", "abb", "mn", "abc"],
    ["bb", "kj", "bbc", "op", "def"]
)
);

