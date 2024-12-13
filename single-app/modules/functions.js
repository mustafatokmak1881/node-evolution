const fs = require("fs");
const path = require("path");

const { exec } = require("child_process");

class SingleApp {
  constructor() {
    this.realPath = path.join(__dirname, "../childrens");
  }
  getDir = () => {
    return new Promise((resolve, reject) => {
      (async () => {
        fs.readdir(this.realPath, (err, files) => {
          resolve(files);
        });
      })();
    });
  };

  runApp = (fileName) => {
    return new Promise((resolve, reject) => {
      (async () => {
        const appFullPath = `node ${this.realPath}\\${fileName}`;
        exec(appFullPath, async (error, stdout, stderr) => {
            resolve(stdout);
        //   const dieResult = await this.die(fileName);
        //   resolve({ dieResult, fileName, stdout });
        });
      })();
    });
  };

  die = (fileName) => {
    const appFullPath = `${this.realPath}\\${fileName}`;
    return new Promise((resolve, reject) => {
      (async () => {
        fs.unlink(appFullPath, (err) => {
          if (err) {
            resolve({ cannotDie: fileName });
          }

          resolve({ dead: fileName });
        });
      })();
    });
  };
}

module.exports = new SingleApp();
