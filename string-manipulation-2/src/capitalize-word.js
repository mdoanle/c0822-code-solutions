/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } else {
    var firstBigLetter = word[0].toUpperCase();
    var restOfWord = word.substring(1).toLowerCase();
    return firstBigLetter + restOfWord;
  }
}
