/* exported filterOutNulls */
function filterOutNulls(values) {
  var noNulls = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      noNulls.push(values[i]);
    }
  }
  return noNulls;
}

/*
1)Look through array
2) If its null, do not output it.

PS
1) output array
2) for loop (i < array.length)
3) if statement (if array[i] !== null)
4) push
5)return
*/
