/* exported toObject */
function toObject(keyValuePair) {
  var emptyObj = {};
  emptyObj[keyValuePair[0]] = keyValuePair[1];
  return emptyObj;
}
