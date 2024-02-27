const array2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function sumOfARow(array, rowIdx) {
  return new Promise((resolve, reject) => {
    if (array.length > rowIdx) {
      setTimeout(() => {
        let sum = 0;
        array.forEach((num) => {
          sum += num;
        });
        console.log(`Sum of row: ${sum}`);
        resolve(sum);
      }, 0);
    } else {
      reject(`BAD INPUT: ${rowIdx} Row index must be valid`);
    }
  });
}

let rowSumPromises = [];

for (let x = 0; x < array2D.length; x++) {
  rowSumPromises.push(sumOfARow(array2D[x], x));
}

Promise.all(rowSumPromises)
  .then((rowSums) => {
    let sum = 0;
    for (rowSum of rowSums) {
      sum += rowSum;
    }
    console.log(`Sum all Rows: ${sum}`);
  })
  .catch((err) => console.log(`Error Message: ${err}`));
