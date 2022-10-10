/* exported reverseWords */
function reverseWords(string) {
  var stringArr = string.split(' ');
  var returnArr = [];
  for (var i = 0; i < stringArr.length; i++) {
    var splitWords = stringArr[i].split('');
    splitWords.reverse();
    returnArr.push(splitWords.join(''));
    var trueReturnArr = returnArr.join(' ');
  }
  return trueReturnArr;
}
