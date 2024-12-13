const fs = require("fs");
const path = require("path");

class SingleApp {
  getDir = () => {
    return new Promise((resolve, reject) => {
      (async () => {
        const realPath = path.join(__dirname, "../childrens");

        fs.readdir(realPath, (err, files) => {
          resolve(files);
        });
      })();
    });
  };
}

module.exports = new SingleApp();
