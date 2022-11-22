/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return stack;
  }
  const first = stack.pop();
  stack.push(value);
  stack.push(first);
}
