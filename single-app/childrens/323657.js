const fs = require("fs");
const path = require("path");
const realPath = path.join(__dirname, "../childrens");
const myFileName = `${__filename}`;
const randomNumber  = Math.floor(Math.random() * 1000000);
const myTarget = `${realPath}\\${randomNumber}.js`;

console.log({ myFileName, myTarget });

fs.copyFile(myFileName, myTarget, (err) => {
  console.log(err);
});
