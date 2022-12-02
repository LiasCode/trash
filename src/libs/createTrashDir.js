const fs = require("fs");
const path = require("path");

const createTrashDir = () => {
  const name = ".papelera";
  const HomeDir = process.env.HOME;
  const papeleraDir = path.resolve(path.join(HomeDir, name));

  if (!fs.existsSync(papeleraDir)) {
    fs.mkdirSync(papeleraDir);
  }

  return papeleraDir;
};

module.exports = {
  createTrashDir,
};
