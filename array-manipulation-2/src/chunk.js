/* exported chunk */
function chunk(array, size) {
  var newArr = [];
  for (var i = 0; i < array.length; i += size) {
    var chunked = array.slice(i, i + size);
    newArr.push(chunked);
  }
  return newArr;
}
