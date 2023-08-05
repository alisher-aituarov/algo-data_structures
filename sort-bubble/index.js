function sort(array) {
  let iterationCount = 0;
  while (iterationCount < array.length) {
    for (let j = 0; j < array.length - iterationCount; j++) {
      if (array[j + 1] !== undefined && array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
    iterationCount++;
  }
  return array;
}

module.exports = {
  sort,
};
