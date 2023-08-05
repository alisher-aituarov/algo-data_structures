function sort(array) {
  if (array.length > 1) {
    const half = Math.ceil(array.length / 2);
    const first = array.slice(0, half);
    const second = array.slice(half);
    return sortAndMerge(sort(first), sort(second));
  }
  return array;
}

function sortAndMerge(first, second) {
  let merged = [];
  let secondPointer = 0;
  if (first.length === 1) {
    return first[0] <= second[0]
      ? [first[0], second[0]]
      : [second[0], first[0]];
  }
  for (let i = 0; i < first.length; i++) {
    for (let k = secondPointer; k < second.length; k++) {
      if (second[k] > first[i]) {
        merged[merged.length] = first[i];
        break;
      }
      if (second[k] <= first[i]) {
        merged[merged.length] = second[k];
        secondPointer++;
      }
      if (k === second.length - 1) {
        return [...merged, ...first.slice(i)];
      }
    }
    if (i === first.length - 1) {
      return [...merged, ...second.slice(secondPointer)];
    }
  }

  return merged;
}

module.exports = {
  sort,
};
