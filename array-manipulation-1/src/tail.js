/* exported tail */
function tail(array) {
  var outputArray = [];
  for (var i = 1; i < array.length; i++) {
    outputArray.push(array[i]);
  }
  return outputArray;
}
