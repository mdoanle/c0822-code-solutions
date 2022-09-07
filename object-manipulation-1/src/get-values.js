/* exported getValues */
function getValues(object) {
  var valuesArr = [];
  for (var x in object) {
    valuesArr.push(object[x]);
  }
  return valuesArr;
}
