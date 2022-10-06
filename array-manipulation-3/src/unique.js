/* exported unique */
function unique(array) {
  var uniqueArr = [];
  for (var i = 0; i < array.length; i++) {
    if (uniqueArr.includes(array[i])) {
      continue;
    } else {
      uniqueArr.push(array[i]);
    }
  }
  return uniqueArr;
}
