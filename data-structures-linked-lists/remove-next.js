/* exported removeNext */

function removeNext(list) {
  if (list.next === null) return;
  const playList = list.next.next;
  list.next = playList;
  return list;
}
