/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/
function reverse(string) {
  // base case: if str is empty we return empty str;
  if(string === '') {
    return '';
  }

  // recurse case: slice from second element to end
  // add first element to slice elements
  return reverse(string.slice(1)) + string[0];
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
