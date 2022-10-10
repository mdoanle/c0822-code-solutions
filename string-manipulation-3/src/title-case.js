/* exported titleCase */
var keyWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

function titleCase(title) {
  title = title.toLowerCase();
  var words = title.split(' ');
  var titleArr = [];
  for (var i = 0; i < words.length; i++) {
    if (words[i] === 'javascript') {
      words[i] = 'JavaScript';
      titleArr.push(words[i]);
    } else if (words[i] === 'api') {
      words[i] = 'API';
      titleArr.push(words[i]);
    } else if (words[i].includes(':')) {
      var colonSplit = words[i].split(':');
      if (colonSplit[0] === 'javascript') {
        colonSplit[0] = 'JavaScript';
      }
      titleArr.push(capitalize(colonSplit.join(':')));
      titleArr.push(capitalize(words[i + 1]));
      i++;
    } else if (i === 0) {
      titleArr.push(capitalize(words[i]));
    } else if (keyWords.includes(words[i])) {
      titleArr.push(words[i]);
    } else if (words[i].includes('-')) {
      titleArr.push(capitalHyphen(words[i]));
    } else if (!keyWords.includes(words[i])) {
      titleArr.push(capitalize(words[i]));

    }
  }
  return titleArr.join(' ');
}

function capitalize(word) {
  var letters = word.split('');
  letters[0] = letters[0].toUpperCase();
  var capitalWord = letters.join('');
  return capitalWord;
}

function capitalHyphen(word) {
  var splitHyphen = word.split('-');
  var dash1 = splitHyphen[0].split('');
  var dash2 = splitHyphen[1].split('');
  dash1[0] = dash1[0].toUpperCase();
  dash2[0] = dash2[0].toUpperCase();
  splitHyphen[0] = dash1.join('');
  splitHyphen[1] = dash2.join('');
  var newDashWord = splitHyphen.join('-');
  return newDashWord;

}
