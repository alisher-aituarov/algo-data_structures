const { createArray, verifySortingAndWriteLog } = require("../utils");
const { measurePerformance } = require("../utils");
const { ARRAY_LENGTH } = require("../config");
const { sort } = require("../sort-selection");

const length = process.env.LENGTH || ARRAY_LENGTH;

const array = createArray(length);

const {
  time,
  array: out,
  name,
} = measurePerformance(() => sort(array), "selection sort", array.length);

verifySortingAndWriteLog(time, out, name);
