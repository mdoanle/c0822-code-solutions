/* exported findIndex */
function findIndex(array, value) {
  var indexOfValue = -1;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      indexOfValue = i;
      break;
    } else if (array[i] !== value) {
      continue;
    }
  }
  if (indexOfValue > -1) {
    return indexOfValue;
  } else {
    return indexOfValue;
  }
}
