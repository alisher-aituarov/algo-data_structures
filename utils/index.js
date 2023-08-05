const { createArray } = require("./create-array");
const { measurePerformance } = require("./measure-speed");
const { format } = require("./number");
const { verifySorting } = require("./verify-sort");
const { writeLog } = require("./write-log");

function verifySortingAndWriteLog(time, array, name) {
  const sorted = verifySorting(array) === true;

  if (sorted === true) {
    writeLog(time, array.length, name);
  }
}

module.exports = {
  verifySorting,
  measurePerformance,
  format,
  createArray,
  writeLog,
  verifySortingAndWriteLog,
};
