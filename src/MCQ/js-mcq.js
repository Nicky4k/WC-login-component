/**
 1. C
 2. C
 */

const array = [1, 2, 3, 4, 5];

function chunks(array, chunkSize) {
  let res = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    res.push(array.slice(i, i + chunkSize));
  }
  console.log(...res);
}

chunks(array, 2);
