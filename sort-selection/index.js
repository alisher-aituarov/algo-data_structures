function sort(array) {
  for (let i = 0; i < array.length; i++) {
    let lowestIndex = i;
    for (let k = i + 1; k < array.length; k++) {
      if (array[lowestIndex] > array[k]) {
        lowestIndex = k;
      }
      if (k === array.length - 1) {
        if (lowestIndex !== i) {
          const temp = array[lowestIndex];
          array[lowestIndex] = array[i];
          array[i] = temp;
        }
      }
    }
  }
  return array;
}

module.exports = {
  sort,
};
