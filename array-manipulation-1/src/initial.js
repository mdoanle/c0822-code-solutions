/* exported initial */
function initial(array) {
  var lastIndex = array.length - 1;
  var outputArray = [];
  for (var i = 0; i < lastIndex; i++) {
    outputArray.push(array[i]);
  }
  return outputArray;
}
