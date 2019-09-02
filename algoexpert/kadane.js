function kadanesAlgorithm(array) {

    let maxEndingHere = array[0];
    let maxSoFar = array[0];

    for (let i = 1; i < array.length; i++) {

        const num = array[i];
        maxEndingHere = Math.max(num, maxEndingHere + num);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);

    }
    return maxSoFar;
}

console.log(kadanesAlgorithm([3,5,-9,1,3,-2,3,4,7,2,-9,6,3,1,-5,4]))
