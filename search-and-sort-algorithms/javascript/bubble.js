const swap = (nums, i, j) => {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

const bubbleSort = nums => {

    // bubble sort or sinking sort is a algorithm that repeatedly
    // steps through a list and compares adjacent pairs and swaps
    // them if they are in the wrong order. It is called bubble because of
    // how large numbers get bubbled to the top of the list. Bubble sort is 
    // practical if the input is in mostly sorted order with some out of
    // order elements nearly in position.

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 0; j < nums.length - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                swap(nums, j, j+1)
            }
        }
    }

    return nums;
}

console.log(bubbleSort([0,0,0,-1,-0,1,2,3,2,1]));
