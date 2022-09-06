/* exported initial */
function initial(array) {
  var lastIndex = array.length - 1;
  var outputArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i === lastIndex) {
      break;
    } else {
      outputArray.push(array[i]);
    }
  }
  return outputArray;
}
