/* exported includes */
function includes(array, value) {
  var returnBoolean = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      returnBoolean = true;
      break;
    } else {
      returnBoolean = false;
    }
  }
  return returnBoolean;
}
