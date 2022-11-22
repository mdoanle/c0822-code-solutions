/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  const value1 = queue.dequeue();
  if (queue.peek() === undefined) {
    return value1;
  }
  const value2 = queue.dequeue();
  if (value1 > value2) {
    queue.enqueue(value1);
    return value2;
  } else {
    queue.enqueue(value2);
    return value1;
  }
}
