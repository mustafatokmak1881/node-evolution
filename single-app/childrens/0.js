const fs = require("fs");
const path = require("path");
const realPath = path.join(__dirname, "../childrens");
const myFileName = `${__filename}`;
const randomNumber = Math.floor(Math.random() * 1000000);
const randomChar = Math.floor(Math.random() * 255);
const getChar = String.fromCharCode(randomChar);
const myTarget = `${realPath}\\${randomNumber}.js`;

console.log({ myFileName, myTarget });

const data = fs.readFileSync(myFileName) + getChar;

fs.writeFileSync(myTarget, data);
