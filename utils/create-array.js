function createArray(length) {
  return Array.from({ length }, (_, i) => parseInt(Math.random() * length));
}

module.exports = {
  createArray,
};
