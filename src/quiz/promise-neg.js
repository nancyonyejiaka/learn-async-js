const array2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, -9],
];

function negativesPerRow(array, rowIdx) {
  return new Promise((resolve, reject) => {
    if (array.length > rowIdx) {
      setTimeout(() => {
        const negatives = array.filter((num) => num < 0);
        if (negatives.length > 0) {
          resolve(rowIdx);
        }
      }, 0);
    } else {
      reject("BAD INPUT: Row index must be valid");
    }
  });
}

let negativesPerRowPromises = [];

for (let x = 0; x < array2D.length; x++) {
  negativesPerRowPromises.push(negativesPerRow(array2D[x], x));
}

Promise.any(negativesPerRowPromises)
  .then((results) => {
    console.log(`Row with index ${results} contains a negative number`);
  })
  .catch((err) => console.log(`Error Message: ${err}`));
