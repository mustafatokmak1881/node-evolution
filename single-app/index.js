const functions = require("../single-app/modules/functions");

(async () => {
  const fileList = await functions.getDir();
  fileList.forEach(async (file, key) => {
    const result = await functions.runApp(file);
    console.log(result);
  });
})();
