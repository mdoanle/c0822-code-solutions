/* exported countdown */
function countdown(number) {
  var numbers = [number];
  var currentNumber = number;
  while (currentNumber > 0) {
    currentNumber -= 1;
    numbers.push(currentNumber);
  }
  return numbers;
}

/* 1. Need a container for countdown number
      a. The parameter given will always be in the container.
    2. Need a variable to modify the given parameter
    3. Need to decrement a number by one until it reaches zero
        a. number cannot go below zero
    4. Loop through a number while decrementing said number by one, when number reaches zero
        then stop the loop
    5. In every iteration of the loop add the number to the container.
    6. return container.
*/
