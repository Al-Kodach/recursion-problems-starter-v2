/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/
debugger

function sumToN(num, total = null) {
  // base case
  if(num < 0) {
    return total
  }

  // recurse case
  // call fn, decrement the current number by 1,
  // add current number to the total and pass it to the next call
  return sumToN(num - 1, total += num);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
