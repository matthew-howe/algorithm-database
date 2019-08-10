const kdifference = (arr, k) => {
    let count = 0;
    const unordered_map = {}

    for (const num of arr) {
        let diff = num - k;
        if (!unordered_map[diff]) unordered_map[diff] = 1;
    }

    for (const num of arr) {
        if (unordered_map[num]) count++
    }

    return count;
}

console.log(kdifference([3, 5, 4, 2, 1], 2));