/* exported flatten */
function flatten(array) {
  var flatArr = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      var childArray = array[i];
      for (var j = 0; j < childArray.length; j++) {
        flatArr.push(childArray[j]);
      }
    } else {
      flatArr.push(array[i]);
    }
  }
  return flatArr;
}
