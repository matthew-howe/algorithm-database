

const a = [1, 7, 3, 4];
const aa = [84, 12, 28, 21];

const fn = nums => {
  // create an array of products before it
  // create an array of products after it

  const productsAscending = [nums[0]];
  let productsDescending = [nums[nums.length - 1]];

  for (let i = 1; i < nums.length; i++) {
    const j = nums.length - i - 1;
    const nextAsc = productsAscending[i - 1] * nums[i];
    const nextDesc = productsDescending[i - 1] * nums[j];
    
    productsAscending.push(nextAsc);
    productsDescending.push(nextDesc);
  }
  productsDescending = productsDescending.reverse();

  const products = [productsDescending[1]]
  for (let i = 1; i < nums.length - 1; i++) {
    const left = productsAscending[i - 1];
    const right = productsDescending[i + 1]
    products.push(left * right)
  }
  products.push(productsAscending[productsAscending.length - 2])
  return products;
};

console.log(fn(a), aa);
