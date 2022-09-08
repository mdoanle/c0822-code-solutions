/* exported truncate */
function truncate(length, string) {
  var shortString = string.substring(0, length);
  return shortString + '...';
}
