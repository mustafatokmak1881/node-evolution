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

  runApp = (appName) => {
    return new Promise((resolve, reject) => {
      (async () => {
        exec(appName, (error, stdout, stderr) => {
          resolve({ error, stdout, stderr });
        });
      })();
    });
  };
}

module.exports = new SingleApp();
