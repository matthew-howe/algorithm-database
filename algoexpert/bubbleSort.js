function swap (a, b, array) {
    const temp = array[b];
    array[b] = array[a];
    array[a] = temp;
}

function bubbleSort(array) {

    let isSorted = false;
    let counter = 0;

    while (!isSorted) {
        console.log(array)
        isSorted = true;
        for (let i = 0; i < array.length - 1 - counter; i++) {
            if (array[i] > array[i + 1]) {
                swap(i, i + 1, array);
                isSorted = false;
            }
        }
        counter++;
    }
    return array;
}

bubbleSort([4,52,7,8,3,6,2,5,246,73,5])
