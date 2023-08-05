function sort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let k = i - 1; k >= 0; k--) {
      if (array[k + 1] < array[k]) {
        const temp = array[k + 1];
        array[k + 1] = array[k];
        array[k] = temp;
      } else {
        break;
      }
    }
  }
  return array;
}

module.exports = {
  sort,
};
