// https://www.codewars.com/kata/54bb6f887e5a80180900046b/

// Longest Palindrome
// Find the length of the longest substring in the given string s that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// If the length of the input string is 0, the return value must be 0.

// Example:
// "a" -> 1
// "aab" -> 2
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0

///////////////////////// TO DO ////////////////////////////////
////////////// ADD MANACHER'S ANALYSIS & EXPLANATION ///////////

//MANACHER'S ALGORITHM
function manachers(s) {
  var d1 = [],
    d2 = [],
    n = s.length,
    l = 0,
    r = -1;
  for (var i = 0; i < n; ++i) {
    var k = i > r ? 0 : Math.min(d1[l + r - i], r - i + 1);
    while (i + k < n && i - k >= 0 && s[i + k] === s[i - k]) {
      ++k;
    }
    d1[i] = k--;
    if (i + k > r) {
      l = i - k;
      r = i + k;
    }
  }
  l = 0;
  r = -1;
  for (var i = 0; i < n; ++i) {
    var k = (i > r ? 0 : Math.min(d2[l + r - i + 1], r - i + 1)) + 1;
    while (i + k - 1 < n && i - k >= 0 && s[i + k - 1] === s[i - k]) {
      ++k;
    }
    d2[i] = --k;
    if (i + k - 1 > r) {
      l = i - k;
      r = i + k - 1;
    }
  }

  return [d1, d2];
}

// CODEWARS ALGORITHM
function codeWars(s) {
  // check if the input is empty
  if (!s) return 0;
  // set a variable for the length that decrements down to 0
  for (let c = s.length; c > 0; c--) {
    // set a variable for the index's that the first variable can fit in
    // these for loops cycle through the string from the longest possible substrings to the shortest
    for (let i = 0; i <= s.length - c; i++) {
      // set a variable for each substring
      var check = s.substr(i, c);
      // if the substring is the same forwards as backwards it is the longest substring
      if (
        check ===
        check
          .split('')
          .reverse()
          .join('')
      )
        return c;
    }
  }
}

// W3 ALGORITHM
function w3helper(str1) {
  // create a helper function that reverses the characters in a string.
  var rev = str1
    .split('')
    .reverse()
    .join('');
  return str1 == rev;
}

function w3(str1) {
  // create variable to store longest word length
  var max_length = 0,
    // create variable to store the longest word
    maxp = '';
  // create a variable that loops from 0 to the input length
  for (var i = 0; i < str1.length; i++) {
    // create a variable for the substrings created by looping the start index up to the input length
    var subs = str1.substr(i, str1.length);
    // create a variable that decrements from the length of the first variable down to 0
    for (var j = subs.length; j >= 0; j--) {
      // create a variable that represents the substring of the first substring and the end of the input
      // looping smaller and smaller
      var sub_subs_str = subs.substr(0, j);
      // if this newly created substring is 1 or less characters, skip that iteration
      if (sub_subs_str.length <= 1) continue;
      // check if the inner substring is a palindrome
      if (w3helper(sub_subs_str)) {
        // check if the inner substring is the longest found
        if (sub_subs_str.length > max_length) {
          // if its the longest set it to that variable
          max_length = sub_subs_str.length;
          // set the string to the longest palindrome variable
          maxp = sub_subs_str;
        }
      }
    }
  }
  // return the longest palindrome found
  return maxp;
}
