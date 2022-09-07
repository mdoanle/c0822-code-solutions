/* exported isVowel */
function isVowel(char) {
  var testingVariable = char.toUpperCase();
  var upperCaseVowels = ['A', 'E', 'I', 'O', 'U'];
  var booleanOutput = true;
  for (var i = 0; i < upperCaseVowels.length; i++) {
    if (testingVariable === upperCaseVowels[i]) {
      booleanOutput = true;
      continue;
    } else if (testingVariable !== upperCaseVowels[i]) {
      booleanOutput = false;
    }
  }
  return booleanOutput;
}
