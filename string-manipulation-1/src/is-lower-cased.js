/* exported isLowerCased */
function isLowerCased(word) {
  var isUpper = 0;
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) {
      isUpper += 1;
      continue;
    }
  }
  if (isUpper > 0) {
    return false;
  } else {
    return true;
  }
}
