function getProductsOfAllIntsExceptAtIndex(intArray) {
    
    if (intArray.length < 2) throw new Error("invalid input")

    // initialize and output array
    // create an array of products of each subarray from start to end
    // create an array of products of each subarray from end to start
    // at each index multilply the appropriate subarray to find the product

    let products = new Array(intArray.length).fill(1);
    let increasingProducts = new Array(intArray.length).fill(1);
    let decreasingProducts = new Array(intArray.length).fill(1);
    increasingProducts[0] = intArray[0];
    decreasingProducts[intArray.length - 1] = intArray[intArray.length - 1]

    for (let i = 1; i < intArray.length; i++) {
        // populate our inc/dec prod arrays
        let d = intArray.length - i - 1; 
        let lastInc = increasingProducts[i - 1];
        let lastDec = decreasingProducts[d + 1];
        increasingProducts[i] = intArray[i] * lastInc;
        decreasingProducts[d] = intArray[d] * lastDec;
    }
    
    products[0] = decreasingProducts[1];
    products[products.length - 1] = increasingProducts[products.length - 2];

    for (let i = 1; i < intArray.length - 1; i++) {

        let leftProduct = increasingProducts[i - 1];
        let rightProduct = decreasingProducts[i + 1];
        
        products[i] =  leftProduct * rightProduct;
    }


    return products;
}


















// Tests

let desc = 'short array';
let actual = getProductsOfAllIntsExceptAtIndex([1, 2, 3]);
let expected = [6, 3, 2];
assertArrayEquals(actual, expected, desc);

desc = 'longer array',
actual = getProductsOfAllIntsExceptAtIndex([8, 2, 4, 3, 1, 5]);
expected = [120, 480, 240, 320, 960, 192];
assertArrayEquals(actual, expected, desc);

desc = 'array has one zero',
actual = getProductsOfAllIntsExceptAtIndex([6, 2, 0, 3]);
expected = [0, 0, 36, 0];
assertArrayEquals(actual, expected, desc);

desc = 'array has two zeros';
actual = getProductsOfAllIntsExceptAtIndex([4, 0, 9, 1, 0]);
expected = [0, 0, 0, 0, 0];
assertArrayEquals(actual, expected, desc);

desc = 'one negative number';
actual = getProductsOfAllIntsExceptAtIndex([-3, 8, 4]);
expected = [32, -12, -24];
assertArrayEquals(actual, expected, desc);

desc = 'all negative numbers';
actual = getProductsOfAllIntsExceptAtIndex([-7, -1, -4, -2]);
expected = [-8, -56, -14, -28];
assertArrayEquals(actual, expected, desc);

desc = 'error with empty array';
const emptyArray = () => (getProductsOfAllIntsExceptAtIndex([]));
assertThrowsError(emptyArray, desc);

desc = 'error with one number';
const oneNumber = () => (getProductsOfAllIntsExceptAtIndex([1]));
assertThrowsError(oneNumber, desc);

function assertArrayEquals(a, b, desc) {
    const arrayA = JSON.stringify(a);
    const arrayB = JSON.stringify(b);
    if (arrayA !== arrayB) {
        console.log(`${desc} ... FAIL: ${arrayA} != ${arrayB}`)
    } else {
        console.log(`${desc} ... PASS`);
    }
}

function assertThrowsError(func, desc) {
    try {
        func();
        console.log(`${desc} ... FAIL`);
    } catch (e) {
        console.log(`${desc} ... PASS`);
    }
}
