/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let item1 = queue.dequeue();
  let item2 = queue.peek();
  while (item1 > item2) {
    queue.enqueue(item1);
    item1 = queue.dequeue();
    item2 = queue.peek();
  }
  return item1;
}
