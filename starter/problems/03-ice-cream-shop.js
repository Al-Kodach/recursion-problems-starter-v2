/***********************************************************************
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor.

Examples:
iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
iceCreamShop(['moose tracks'], 'moose tracks'); // true
iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'); // false
iceCreamShop([], 'honey lavender'); // false
***********************************************************************/

function iceCreamShop(flavors, favorite, i = 0) {
  // if current element is equal favorite element return true
  if (flavors[i] === favorite) {
    return true;
  }

  // base case
  if (i >= flavors.length) {
    return false;
  }

  // else recurse
  return iceCreamShop(flavors, favorite, i+1);
}

iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = iceCreamShop;
} catch (e) {
  module.exports = null;
}
