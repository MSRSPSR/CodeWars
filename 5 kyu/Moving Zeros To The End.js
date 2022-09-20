function moveZeros(arr) {
  let count = 0;

  let replaced = arr.filter((el) => {
    if (el !== 0) return el;
    else ++count;
  });

  for (let j = 0; j < count; j++) {
    replaced.push(0);
  }

  return replaced;
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
