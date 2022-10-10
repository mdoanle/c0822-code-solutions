/* exported union */
function union(first, second) {
  var unionArr = [];
  for (var i = 0; i < first.length; i++) {
    unionArr.push(first[i]);
  }
  for (var j = 0; j < second.length; j++) {
    if (unionArr.includes(second[j])) {
      continue;
    } else {
      unionArr.push(second[j]);
    }
  }
  return unionArr;
}
