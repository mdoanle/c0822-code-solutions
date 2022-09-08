/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    var firstLetterJava = word[0].toUpperCase();
    var restOfJava = word.substring(1, 4).toLowerCase();
    var jsScript = word[4].toUpperCase();
    var restOfScript = word.substring(5).toLowerCase();
    return firstLetterJava + restOfJava + jsScript + restOfScript;
  } else {
    var firstBigLetter = word[0].toUpperCase();
    var restOfWord = word.substring(1).toLowerCase();
    return firstBigLetter + restOfWord;
  }
}
