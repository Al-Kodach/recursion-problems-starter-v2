/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten( arr, res = []) {
  // base case: empty array
  if ( arr.length === 0) return res;


  // if element at index 0 is an Array?
  if( Array.isArray(arr[0]) ) {

    // incoke the func again and spreading the current element
    return flatten(arr.reduce(
     // spread current element and return it to the flatten func
    (acc, cur) => {
      return [...acc, ...cur];
    }
    // we maintain the results arr since current element is an arr;
   ), res = res);

  }
  else {
    // if current element is not an array, we pass in element from second to last
    // add current element to results arr.
    return flatten(arr.slice(1), res = [...res, arr[0]]);
  }

}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
