/* exported isPalindromic */
function isPalindromic(string) {
  var stringNoSpace = string.split(' ').join('');
  for (var i = 0; i < stringNoSpace.length / 2; i++) {
    if (stringNoSpace[i] !== stringNoSpace[stringNoSpace.length - 1 - i]) { return false; }
  }
  return true;
}
