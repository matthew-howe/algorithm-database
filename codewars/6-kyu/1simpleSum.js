// https://www.codewars.com/kata/simple-sum-of-pairs

// iven an integer n, find two integers a and b such that:

// A) a >= 0 and b >= 0
// B) a + b = n
// C) DigitSum(a) + Digitsum(b) is maximum of all possibilities.
// You will return the digitSum(a) + digitsum(b).

// For example:
// solve(29) = 11. If we take 15 + 14 = 29 and digitSum = 1 + 5 + 1 + 4 = 11. There is no larger outcome.
// n will not exceed 10e10.

// describe('Basic tests', function() {
//   Test.assertEquals(solve(18), 18);
//   Test.assertEquals(solve(29), 11);
//   Test.assertEquals(solve(45), 18);
//   Test.assertEquals(solve(1140), 33);
//   Test.assertEquals(solve(7019), 35);
// });
