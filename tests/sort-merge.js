const { createArray } = require("../utils");
const { measurePerformance } = require("../utils");
const { ARRAY_LENGTH } = require("../config");
const { sort } = require("../sort-merge");
const { verifySortingAndWriteLog } = require("../utils");

const length = process.env.LENGTH || ARRAY_LENGTH;

const array = createArray(length);

const {
  time,
  array: out,
  name,
} = measurePerformance(() => sort(array), "merge sort", array.length);

verifySortingAndWriteLog(time, out, name);
