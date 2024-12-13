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
          const dieResult = await this.die(fileName);
          resolve({ dieResult, fileName, error, stdout, stderr });
        });
      })();
    });
  };

  die = (fileName) => {
    const appFullPath = `node ${this.realPath}\\${fileName}`;
    return new Promise((resolve, reject) => {
      (async () => {
        fs.unlink(appFullPath, (err) => {
          if (err) {
            console.log({ cannotDie: fileName });
          }
        });
      })();
    });
  };
}

module.exports = new SingleApp();
