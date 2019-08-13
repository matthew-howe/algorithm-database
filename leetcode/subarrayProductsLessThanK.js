// Your are given an array of positive integers nums.

// Count and print the number of (contiguous) subarrays where the product of all the elements in the subarray is less than k.

// Example 1:
// Input: nums = [10, 5, 2, 6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are: [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6].
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
// Note:

// 0 < nums.length <= 50000.
// 0 < nums[i] < 1000.
// 0 <= k < 10^6.

// Sliding Window Approach
// using two pointers in the array, call a monotone increasing function on each
// ceiling on the smallest left so that
// nums[left] * nums[left + 1] * nums[left + 2] ... nums[right] is less than k
//
// our loop rule is that left is the smallest value so that the product in 
// prod = nums[left] * nums[left + 1] * ... * nums[right] is less than k
//
// for every right we update left and prod to maintain this rule.
// then the number oF intervals with subarray product less than k and with 
// right-mose coordinate right, is right - left + 1.
// We count all of these for each value of right

const numSubarrayProductLessThanK = (nums, k) => {
    if (k <= 1) return 0;
    let product = 0;
    let count = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        product *= nums[right];

        while (product >= k) prod /= nums[left++];

        count += right - left + 1
    }

    return count;
}

const zzz = (nums, k) => {
    if (k <= 1) return 0;
    let product = 1;
    let count = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        product *= nums[right];
        while (product >= k) {
            product /= nums[left++]
        }

        count += right - left + 1;


    }
    
    return count;
}

console.log(zzz([1,2,3,4,5,6,7,8], 100));
