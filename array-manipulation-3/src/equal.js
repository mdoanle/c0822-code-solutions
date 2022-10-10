/* exported equal */
function equal(first, second) {
  if (first.length === second.length) {
    for (var i = 0; i < first.length; i++) {
      if (first[i] === second[i]) {
        continue;
      } else if (first[i] !== second[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
}
