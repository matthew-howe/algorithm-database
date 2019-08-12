// Your are given an array of positive integers nums.

// Count and print the number of(contiguous) subarrays where the product of all the elements in the subarray is less than k.

//     Example 1:
// Input: nums = [10, 5, 2, 6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are: [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6].
// Note that[10, 5, 2] is not included as the product of 100 is not strictly less than k.
//     Note:

// 0 < nums.length <= 50000.
// 0 < nums[i] < 1000.
// 0 <= k < 10 ^ 6.

// Brute Force Approach
// (O)n^2 -> two for loops
// o(1) space -> 4 variables curSum, count, i, j
// one loop iterates through each element from 1 -> (N / 2) - 1
// the second loop starts at the first element and does 3 things
//          2. adds it to the current iterations sum
//          3. checks if the sum greater than N (if so break;)
//          4. checks if the sum is equal to k (if so increment final count);
const bfnumsum = n => {
    let count = 0;

    for (let i = 1; i < (n / 2) + 1; i++) {
        let curSum = i;

        for (let j = i + 1; j < (n / 2) + 1; j++) {
            curSum += j;

            if (curSum > n) {
                curSum = i;
                break;
            }

            if (curSum === n) {
                count++
                curSum = i;
                break;
            }

        }
    }

    return count;
}


// Mathematical Approach
// Using the equation N = (x + 1) + (x + 2) + ... + (x + k)
// to find the sum of consecutive integers.
// x is greater than or equal to zero, and k is greater than 1
// So we can simplify to 2 * n = k(2 * x + k + 1)
// and now 1 <= k <= 2 * n
// so we try every k
function mathnumsum(num) {
    let count = -1;

    for (let k = 1; k < 2 * n + 1; k++) {
        // looping from 1 -> ( 2 * n + 1 )
        // 
        if (2 * n % k === 0) {
            y = 2 * n / k - k - 1;
            if (y % 2 === 0 && y >= 0) {
                count++;
            }
        }
    }
    return count;
}

const abc = n => {
    let range = 2 * n;
    let count = -1;

    for (let k = 1; k < range + 1; k++) {
        if (range % k === 0) {
            
            y = range / k - k - 1;
            console.log('k', k, 'y', y)
            if (y % 2 === 0 && y >= 0) {
                count++
            }
        }
    }
    return count;
}



const abcdefg = n => {
    let sum = 0;
    let count = 0;
    
    for (let i = 1; sum < n; i++) {
        sum += i;
        if (((n - sum) % i) === 0) {
            count++;
        }
        
        // N = k + (k+1) + (k+2) + (k+3) ... (i * k) + (1+2+3)
        // if the difference of n and the current sum is diviisible by i
        // there is a solution with length i

    }

    return count;
}

console.log(abcdefg(15));

