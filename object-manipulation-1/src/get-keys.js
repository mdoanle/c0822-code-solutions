/* exported getKeys */
function getKeys(object) {
  var returnArr = [];
  for (var x in object) {
    returnArr.push(x);
  }
  return returnArr;
}
