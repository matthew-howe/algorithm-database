// This kata is to practice simple string output. Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// ###Task:

// You need to return a string that displays a diamond shape on the screen using asterisk ("*") characters. Please see provided test cases for exact output format.

// The shape that will be returned from print method resembles a diamond, where the number provided as input represents the number of *’s printed on the middle line. The line above and below will be centered and will have 2 less *’s than the middle line. This reduction by 2 *’s for each line continues until a line with a single * is printed at the top and bottom of the figure.

// Return null if input is even number or negative (as it is not possible to print diamond with even number or negative number).

// Please see provided test case(s) for examples.

// Python Note
// Since print is a reserved word in Python, Python students must implement the diamond(n) method instead, and return None for invalid input.

// JS Note
// JS students, like Python ones, must implement the diamond(n) method, and return null for invalid input.

// Test Cases
// Test.describe( "diamond()", function(){

//   Test.assertEquals(diamond(3), " *\n***\n *\n")
//   Test.assertEquals(diamond(2), null)
//   Test.assertEquals(diamond(-3), null)
//   Test.assertEquals(diamond(0), null)
// });

// CODEWARS ALGORITHM

// create a helper function to repeat a string
function repeat(str,x){return Array(x+1).join(str); }
// create a helper function to format the number of blank spaces, stars, and includes a line break
function line(spaces,stars){ return repeat(" ",spaces)+repeat("*",stars)+"\n"; }

function diamond(n){
  // if n is a positive odd number return null
  if( n%2==0 || n<1 ) return null
  // create a variable for an incrementer (x)
  // creating a variable for the new lines to add (add)
  // setting a varaible for the diameter of our diamond
  var x=0, add, diam = line(x,n);
  // using a while loop to determine if our diamond needs more lines
  while( (x+=2) < n ){
    // if it does, add spaces equal to the number of times the while loop has run, and 2 less stars than the prev
    add = line(x/2,n-x);
    // adding the lines we created above and below what we already have
    diam = add+diam+add;
  }
  return diam;
}
