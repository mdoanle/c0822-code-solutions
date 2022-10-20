const mapTestNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function map(array, transform) {
  const returnArr = [];
  for (let i = 0; i < array.length; i++) {
    returnArr.push(transform(array[i], i, array));
  }
  return returnArr;
}

const test = map(mapTestNum, arr => arr * 2);
console.log(test);
