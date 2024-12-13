const fs = require("fs");
const path = require("path");
const realPath = path.join(__dirname, "../childrens");
const myFileName = `${__filename}`;
const myTarget = `${realPath}\\${"99.js"}`;

console.log({ myFileName, myTarget });

fs.copyFile(myFileName, myTarget, (err) => {
  console.log(err);
});
