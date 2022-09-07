/* exported isVowel */
function isVowel(char) {
  var everythingUpper = char.toUpperCase();
  var testingArr = ['A', 'E', 'I', 'O', 'U'];
  var returnVal = true;
  for (var i = 0; i < testingArr.length; i++) {
    if (everythingUpper === testingArr[i]) {
      returnVal = true;
      break;
    } else if (everythingUpper !== testingArr[i]) {
      returnVal = false;
    }
  }
  return returnVal;
}
