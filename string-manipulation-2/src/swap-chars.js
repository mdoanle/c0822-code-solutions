/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var returnArr = string.split('');
  var tempSecondChar = returnArr[secondIndex];

  returnArr[secondIndex] = returnArr[firstIndex];
  returnArr[firstIndex] = tempSecondChar;
  return returnArr.join('');
}
