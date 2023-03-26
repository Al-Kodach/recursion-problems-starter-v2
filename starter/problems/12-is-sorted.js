/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

function isSorted(arr, i = 1, num) {
  // base case: return true at the end of loop
  if (i >= arr.length) return true;

  let el = arr[i];
  num = arr[i - 1]

  // if previous num - current number greater than zero
  if (num - el > 0) {
    return false;
  }

  return isSorted(arr, i+1, num)
}
console.log(isSorted([2, 4, 6, 7, 8])); // false)
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
