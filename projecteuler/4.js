
// # A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// # Find the largest palindrome made from the product of two 3-digit numbers.

function isPldrm(n) {
  let s = n.toString();
  let f = 0;
  let c = s.length-1;
  while (f<c) {
    if (s[f] !== s[c]) return false;
    f++;
    c--;
  }
  return true;
}

function lrgPldrm() {
  let largestProduct = 999 * 999;
  for (let i = largestProduct; i >= 999; i--) {

  }
}


