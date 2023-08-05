const { createArray } = require("../utils");
const { measurePerformance } = require("../utils");
const { ARRAY_LENGTH } = require("../config");
const { verifySortingAndWriteLog } = require("../utils");

const length = process.env.LENGTH || ARRAY_LENGTH;

const array = createArray(length);

const {
  time,
  array: out,
  name,
} = measurePerformance(
  () => Array.prototype.sort.call(array, (a, b) => a - b),
  "default sort",
  array.length
);

verifySortingAndWriteLog(time, out, name);
