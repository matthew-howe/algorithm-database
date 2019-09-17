// https://leetcode.com/problems/wiggle-sort-ii/
//
// Given an unsorted array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....

// Example 1:

// Input: nums = [1, 5, 1, 1, 6, 4]
// Output: One possible answer is [1, 4, 1, 5, 1, 6].
// Example 2:

// Input: nums = [1, 3, 2, 2, 3, 1]
// Output: One possible answer is [2, 3, 1, 3, 1, 2].
// Note:
// You may assume all input has valid answer.

// Follow Up:
// Can you do it in O(n) time and/or in-place with O(1) extra space?

const medianFinder = arr => {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

function swap(x,y){
    let t = x;
    x = y;
    y = t;
}



var wiggleSort = function(nums) {
    const median = medianFinder(nums);
    const pointer1 = 0;
    const pointer2 = 1;
    const underMedian = true;

    while (pointer1 < nums.length - 1) {
        if (underMedian) {

            if (array[pointer1] < median) {

                pointer1++;
                underMedian = !underMedian;
                continue;

            }

            if (array[pointer2] > median) {

                swap(array[pointer1], array[pointer2])
                pointer1++;
                pointer2++;
                underMedian = !underMedian;
                continue;

            } else {

                while (array[pointer2] < median) pointer2++;
                swap(array[pointer1], array[pointer2])
                pointer1++;
                pointer2++;
                underMedian = !underMedian;
                continue;

            }

        } else {

        }

    }

    

};

console.log(wiggleSort([1, 3, 2, 2, 3, 1]));
