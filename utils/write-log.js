var fs = require("fs");
const { format } = require("./number");

function writeLog(time, length, name) {
  const filename = `logs/${name.split(" ").join("_")}.log`;
  const message = `${time} ms - ${format(length)} items\n`;
  fs.mkdir("logs", { recursive: true }, (err) => {
    if (err) throw err;
  });
  fs.appendFile(filename, message, function (err) {
    if (err) throw err;
    return true;
  });
}

module.exports = {
  writeLog,
};
