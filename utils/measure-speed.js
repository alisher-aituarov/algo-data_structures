function measurePerformance(fn, name, length) {
  if (name === undefined || length === undefined) {
    throw new Error("Function name and items count must be passed");
  }
  const start = performance.now();

  const result = fn();

  const duration = parseInt(performance.now() - start);

  console.info(`Took ${duration} ms to sort ${length} items using ${name}`);

  return {
    time: duration,
    array: result,
    name,
  };
}

module.exports = {
  measurePerformance,
};
