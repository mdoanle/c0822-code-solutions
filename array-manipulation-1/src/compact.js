/* exported compact */
function compact(array) {
  var returnArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!array[i] === false) {
      returnArray.push(array[i]);
    }
  }
  return returnArray;
}
