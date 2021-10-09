const a = [-10, -10, 1, 3, 2]; // -> 300

const fn = nums => {
  let highest = nums[0];
  let lowest = nums[0];
  let highestOf2 = nums[0] * nums[1];
  let lowestOf2 = nums[0] * nums[1];
  let highestOf3 = nums[0] * nums[1] * nums[2];

  for (let i = 2; i < nums.length; i++) {
    const curNum = nums[i];

    highestOf3 = Math.max(highestOf3, curNum * highestOf2, curNum * lowestOf2);
    highestOf2 = Math.max(highestOf2, curNum * highest);
    highest = Math.max(highest, curNum);
    lowestOf2 = Math.min(lowestOf2, curNum * lowest);
    lowest = Math.min(lowest, curNum);
  }

  return highestOf3;
};

console.log(fn(a));
