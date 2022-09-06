/* exported getWords */
function getWords(string) {
  var words = string.split(' ');
  if (string === '') {
    return [];
  }
  return words;
}
