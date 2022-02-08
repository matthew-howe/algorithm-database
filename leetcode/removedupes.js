/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let uniqcount = 0;
  let lastseen;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== lastseen) {
      nums[uniqcount] = nums[i];
      lastseen = nums[i]; 
      uniqcount++;
    }
  }
  return uniqcount;
};

const input = [1,1,2]
const output = 2

console.log(removeDuplicates(input), 'shuould be 2');
