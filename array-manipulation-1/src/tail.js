/* exported tail */
function tail(array) {
  var outputArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i === 0) {
      continue;
    } else {
      outputArray.push(array[i]);
    }
  }
  return outputArray;
}
