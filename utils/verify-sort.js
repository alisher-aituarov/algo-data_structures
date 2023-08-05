function verifySorting(array) {
  const sorted = !array.some((v, i) => {
    return v > array[i + 1];
  });
  if (sorted === true) {
    return console.log("All sorted!");
  }
  return console.error("Array is not sorted!");
}

module.exports = {
  verifySorting,
};
