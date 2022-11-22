/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) return undefined;
  for (let i = 0; i < index; i++) {
    const item = queue.dequeue();
    queue.enqueue(item);
  }
  return queue.dequeue();
}
