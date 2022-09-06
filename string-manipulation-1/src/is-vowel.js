/* exported isVowel */
function isVowel(char) {
  var upperCaseVowels = ['A', 'E', 'I', 'O', 'U'];
  var lowerCaseVowels = ['a', 'e', 'i', 'o', 'u'];

  if (char === char.toUpperCase()) {
    if (char === upperCaseVowels[0]) {
      return true;
    } else if (char === upperCaseVowels[1]) {
      return true;
    } else if (char === upperCaseVowels[2]) {
      return true;
    } else if (char === upperCaseVowels[3]) {
      return true;
    } else if (char === upperCaseVowels[4]) {
      return true;
    } else {
      return false;
    }
  } else if (char === char.toLowerCase()) {
    if (char === lowerCaseVowels[0]) {
      return true;
    } else if (char === lowerCaseVowels[1]) {
      return true;
    } else if (char === lowerCaseVowels[2]) {
      return true;
    } else if (char === lowerCaseVowels[3]) {
      return true;
    } else if (char === lowerCaseVowels[4]) {
      return true;
    } else {
      return false;
    }
  }
}
