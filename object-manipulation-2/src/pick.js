/* exported pick */
function pick(source, keys) {
  var newObj = {};
  for (var i = 0; i < keys.length; i++) {
    if (keys[i] in source && typeof source[keys[i]] !== 'undefined') {
      newObj[keys[i]] = source[keys[i]];
    }
  }
  return newObj;
}
