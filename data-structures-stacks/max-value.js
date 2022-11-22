/* exported maxValue */

function maxValue(stack) {
  let largest = -Infinity;
  while (stack.peek() !== undefined) {
    const value = stack.pop();
    if (value > largest) {
      largest = value;
    }
  }
  if (stack.peek() === undefined) {
    return largest;
  }
  return largest;
}
