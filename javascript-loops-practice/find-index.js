/* exported findIndex */
function findIndex(array, value) {
  var indexOfValue = -1;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      indexOfValue = i;
      break;
    }
  }
  if (indexOfValue > -1) {
    return indexOfValue;
  } else {
    return indexOfValue;
  }
}

/*
1)Is the value in the given list of numbers?
2) If it is, say that.
3) If its not, then say that.

PC
1) counter variable
2) for loop to iterate through array
3) if statement to check if the current index is equal to the value
  a) If it is, then state the index where the sought value was found
  b)
*/
