/* exported isVowel */
function isVowel(char) {
  var testingVariable = char.toUpperCase();
  var upperCaseVowels = ['A', 'E', 'I', 'O', 'U'];

  if (testingVariable === upperCaseVowels[0]) {
    return true;
  } else if (testingVariable === upperCaseVowels[1]) {
    return true;
  } else if (testingVariable === upperCaseVowels[2]) {
    return true;
  } else if (testingVariable === upperCaseVowels[3]) {
    return true;
  } else if (testingVariable === upperCaseVowels[4]) {
    return true;
  } else {
    return false;
  }

}
