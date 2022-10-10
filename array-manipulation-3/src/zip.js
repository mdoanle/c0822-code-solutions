/* exported zip */
function zip(first, second) {
  var shortestLength = 0;
  var zippedArr = [];
  if (first.length < second.length) {
    shortestLength = first.length;
  } else {
    shortestLength = second.length;
  }
  for (var i = 0; i < shortestLength; i++) {
    var smallZip = [];
    smallZip.push(first[i], second[i]);
    zippedArr.push(smallZip);
  }
  return zippedArr;
}
