/* exported filterOutStrings */
function filterOutStrings(values) {
  var noStrings = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      noStrings.push(values[i]);
    }
  }
  return noStrings;
}

/*
1) go through given array
2) if the current index is not a string, then send it out.  If it is a string do nothing

PS
1)output array
2) for loop (i < array.length)
3) if statement (if current index is not of datatype string, then push it)
4) return output array.
*/
