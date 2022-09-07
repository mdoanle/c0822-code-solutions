/* exported includesSeven */
function includesSeven(array) {
  var sevenIncluded = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      sevenIncluded = true;
    }
  }
  return sevenIncluded;
}

/*
1) Go through array
2) If 7 is present then say yes
3) If not then say no

PC
1) For loop length of array
2) check array element by array element
3) create a counter for how many times 7 appears
4) if Counter is anything more than 0 then 7 is present
5) return true is counter > 0
*/
