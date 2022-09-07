/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var suffixWords = [];
  for (var i = 0; i < words.length; i++) {
    suffixWords.push(words[i] + suffix);
  }
  return suffixWords;
}

/*
1) Go through array one at a time
2) add suffix to each word in array
3) give back the new word to a new array

PseudoCode
1)output array
2)parse through array one index at a time (for loop? i < array.length)
3)add suffix to each word (concatenate)
4) add new word to output array
5) return output array */
