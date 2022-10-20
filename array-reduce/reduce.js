const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const sumReducer = (acc, curr) => acc + curr;

const sum = reduce(numbers, sumReducer, 0);

function reduce(array, reducer, initialValue) {
  if (initialValue === undefined) {
    const accumulator = 0;
  }
  let accumulator = initialValue;
  for (let i = 0; i < array.length; i++) {
    accumulator = reducer(accumulator, array[i]);
  }
  return accumulator;
}

console.log(sum);
