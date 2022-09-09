/* exported numVowels */
function numVowels(string) {
  var convertedString = string.toLowerCase();
  var counter = 0;
  var vowelArr = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < vowelArr.length; i++) {
    for (var k = 0; k < convertedString.length; k++) {
      if (convertedString[k] === vowelArr[i]) {
        counter++;
      }
    }
  }
  return counter;
}
