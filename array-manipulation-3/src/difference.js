/* exported difference */
function difference(first, second) {
  var differenceArr = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      continue;
    } else {
      differenceArr.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (first.includes(second[j])) {
      continue;
    } else {
      differenceArr.push(second[j]);
    }
  }
  return differenceArr;
}
