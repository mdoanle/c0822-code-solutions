/* exported capitalizeWords */
function capitalizeWords(string) {
  var holderArr = string.split(' ');
  for (var i = 0; i < holderArr.length; i++) {
    holderArr[i] = holderArr[i].charAt(0).toUpperCase() + holderArr[i].slice(1).toLowerCase();
  }
  var newString = holderArr.join(' ');
  return newString;
}
