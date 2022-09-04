/* exported oddOrEven */
function oddOrEven(numbers) {
  var resultsArray = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      resultsArray.push('even');
    } else {
      resultsArray.push('odd');
    }
  }
  return resultsArray;
}
