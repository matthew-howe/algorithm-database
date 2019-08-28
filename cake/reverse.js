function swap(a, b) {

    let temp = a;


}

function reverse(arrayOfChars) {

    // initialize a pointer to the first char
    // initialize a pointer to the last char
    // swap them
    // increment the the first, decrement the second
    // repeat until the two pointers cross

    let left = 0;
    let right = arrayOfChars.length - 1;

    while (left < right) {

        let temp = arrayOfChars[left]
        arrayOfChars[left] = arrayOfChars[right];
        arrayOfChars[right] = temp;

        left++;
        right--;
    }

    return arrayOfChars
}

// o(n) time
// o(1) space

