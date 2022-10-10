/* exported intersection */
function intersection(first, second) {
  var intersectionArr = [];
  var longestArr = 0;
  if (first.length < second.length) {
    longestArr = second.length;
  } else {
    longestArr = first.length;
  }
  for (var i = 0; i < longestArr; i++) {
    if (second.includes(first[i])) {
      intersectionArr.push(first[i]);
    }
  }
  return intersectionArr;
}
