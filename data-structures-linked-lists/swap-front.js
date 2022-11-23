/* exported swapFront */

function swapFront(list) {
  if (list.next === null) return list;
  const secondData = list.next.data;
  const firstData = list.data;
  list.data = secondData;
  list.next.data = firstData;
  return list;
}
