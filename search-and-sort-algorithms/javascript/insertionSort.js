const swap = (nums, i, j) => {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

const insertionSort = nums => {

    // insertion is a simple sorting algorithm that builds
    // the final array one item at a time. It is much less
    // efficient on large lists than quicksort, heapsort, or merge sort.

    for (let i = 0; i < nums.length; i++) {
        let j = i;

        while (j > 0 && nums[j - 1] > nums[j]) {
            swap(nums, j, j - 1);
            j -= 1;
        }
    }

    return nums;
}

console.log(insertionSort([0,0,0,-1,-0,1,2,3,2,1]));
