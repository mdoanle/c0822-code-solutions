/* exported isLowerCased */
function isLowerCased(word) {
  var isLower = true;
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) {
      isLower = true;
      continue;
    } else {
      isLower = false;
      break;
    }
  }
  return isLower;
}
