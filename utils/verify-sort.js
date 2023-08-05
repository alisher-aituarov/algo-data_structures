function verifySorting(array) {
  const sorted = !array.some((v, i) => {
    return v > array[i + 1];
  });
  if (sorted === true) {
    console.log("All sorted!");
    return true;
  }
  return console.error("Array is not sorted!");
}

module.exports = {
  verifySorting,
};
