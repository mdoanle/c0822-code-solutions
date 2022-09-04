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

/*
1) search through list
2) Is the number odd? even?
3) tell me the answer

PC
1) Output array
2)for loop
3) if statement (if array[i] % 2 ===0 then add even, if not then add odd)
4)return output array.
*/
