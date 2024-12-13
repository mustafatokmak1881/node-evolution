const functions = require("../single-app/modules/functions");

let oldFileList = [];

const app = () => {
  console.log({ running: new Date() });
  (async () => {
    const fileList = await functions.getDir();
    if (oldFileList != fileList && fileList.length > 0) {
      fileList.forEach(async (file, key) => {
        const result = await functions.runApp(file);
        console.log(result);
      });

      oldFileList = fileList;
    }
  })();
};

setInterval(() => {
  app();
}, 500);
