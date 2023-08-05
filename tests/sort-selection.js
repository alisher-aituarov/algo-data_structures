const { createArray } = require("../utils/create-array");
const { measurePerformance } = require("../utils/measure-speed");
const { ARRAY_LENGTH } = require("../config");
const { sort } = require("../sort-selection");
const { verifySorting } = require("../utils/verify-sort");
const { writeLog } = require("../utils/write-log");

const length = process.env.LENGTH || ARRAY_LENGTH;

const array = createArray(length);

const {
  time,
  array: out,
  name,
} = measurePerformance(() => sort(array), "selection sort", array.length);

writeLog(time, out.length, name);

verifySorting(out);
