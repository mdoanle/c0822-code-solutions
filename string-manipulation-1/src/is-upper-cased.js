/* exported isUpperCased */
function isUpperCased(word) {
  var isLower = 0;
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      isLower += 1;
      continue;
    }
  }
  if (isLower > 0) {
    return false;
  } else {
    return true;
  }
}

/*
1)Look at the word
2) Check if its fully Uppercased
3)whether it is or not, tell me so.

PC
1) counter variable
2) Parse through the string with a loop
3) if statement (if the current letter im on is Uppercase then continue, but if its not then increment the counter.)
4)if the counter variable is larger than 0 then that means at least one letter is lowercase, which returns false. And vice versa
*/
