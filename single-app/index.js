const functions = require("../single-app/modules/functions");

(async () => {
  const dirList = await functions.getDir();
  console.log({ dirList });
})();
