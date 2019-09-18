const mergeSort = nums => {

    if (nums.length === 1) return;

    let middleIndex = Math.floor(nums.length / 2);
    let leftHalf = nums.slice(0, middleIndex);
    let rightHalf = nums.slice(middleIndex);

    mergeSort(leftHalf);
    mergeSort(rightHalf);

    let i = 0;
    let j = 0;
    let k = 0;

    while (i < leftHalf.length && j < rightHalf.length) {
        if (leftHalf[i] < rightHalf[j]) {
            nums[k] = leftHalf[i++];
        } else {
            nums[k] rightHalf[j++];
        }
    }

}

console.log(mergeSort([0,0,0,-1,-0,1,2,3,2,1]));
