/* exported capitalize */
function capitalize(string) {
  var bigFirstLetter = string[0].toUpperCase();
  var smallRestOfWord = string.substring(1).toLowerCase();
  return bigFirstLetter + smallRestOfWord;
}

/*
1) Look at word
2) grab the first letter, Capitalize it
3) Look at the rest of the word, lower case it all.

PC
1) variable for first letter.
2) first letter will be capitalized (.toUpperCase)
3) variable for rest of word.
4) rest of word is lower case (how can i access the rest of a string? .substring(index))
5) concatenate the modified string.
*/
