// sort the array
// initialize a variable for highest product
// initialize an array for the product of two combos
//
// at each iteration keep track of
// highest product of 3
// highest product of 2
// highest
// lowest product of 2
// lowest

function highestProductOf3(arrayOfInts) {
  if (arrayOfInts.length < 3)
    throw new Error('Less than 3 integers in the input');

  arrayOfInts = arrayOfInts.sort((a, b) => a - b);

  let highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];
  let highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  let highest =
    arrayOfInts[0] > arrayOfInts[1] ? arrayOfInts[0] : arrayOfInts[1];
  let lowestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  let lowest =
    arrayOfInts[0] < arrayOfInts[1] ? arrayOfInts[0] : arrayOfInts[1];

  for (let i = 2; i < arrayOfInts.length; i++) {
    const num = arrayOfInts[i];

    if (num * highestProductOf2 > highestProductOf3) {
      highestProductOf3 = num * highestProductOf2;
    }

    if (num * lowestProductOf2 > highestProductOf3) {
      highestProductOf3 = num * lowestProductOf2;
    }

    if (num * highest > highestProductOf2) {
      highestProductOf2 = num * highest;
    }

    if (num * lowest < lowestProductOf2) {
      lowestProductOf2 = num * lowest;
    }

    if (num > highest) highest = num;
    if (num < lowest) lowest = num;
  }

  return highestProductOf3;
}

// Tests

let desc = 'short array';
let actual = highestProductOf3([1, 2, 3, 4]);
let expected = 24;
assertEqual(actual, expected, desc);

desc = 'longer array';
actual = highestProductOf3([6, 1, 3, 5, 7, 8, 2]);
expected = 336;
assertEqual(actual, expected, desc);

desc = 'array has one negative';
actual = highestProductOf3([-5, 4, 8, 2, 3]);
expected = 96;
assertEqual(actual, expected, desc);

desc = 'array has two negatives';
actual = highestProductOf3([-10, 1, 3, 2, -10]);
expected = 300;
assertEqual(actual, expected, desc);

desc = 'array is all negatives';
actual = highestProductOf3([-5, -1, -3, -2]);
expected = -6;
assertEqual(actual, expected, desc);

desc = 'error with empty array';
const emptyArray = () => highestProductOf3([]);
assertThrowsError(emptyArray, desc);

desc = 'error with one number';
const oneNumber = () => highestProductOf3([1]);
assertThrowsError(oneNumber, desc);

desc = 'error with two numbers';
const twoNumber = () => highestProductOf3([1, 1]);
assertThrowsError(twoNumber, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
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
