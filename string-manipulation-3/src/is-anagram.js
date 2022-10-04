/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var firstStringNoSpace = firstString.split(' ').join('');
  var secondStringNoSpace = secondString.split(' ').join('');

  if (firstStringNoSpace.length !== secondStringNoSpace.length) {
    return false;
  }
  var testFirstString = firstStringNoSpace.split('');
  var testSecondString = secondStringNoSpace.split('');
  var sortedFirstString = testFirstString.sort();
  var sortedSecondString = testSecondString.sort();
  for (var i = 0; i < sortedFirstString.length; i++) {
    if (sortedFirstString[i] !== sortedSecondString[i]) {
      return false;
    }
  }
  return true;
}
