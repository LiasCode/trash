const path = require("path");
const fs = require("fs");
const mv = require("mv");

const moveDirectories = (dirs, PAPELERA_DIR) => {
  dirs.forEach((dir) => {
    const dirNameSplited = dir.split("/");
    const name = dirNameSplited[dirNameSplited.length - 1];

    mv(dir, path.join(PAPELERA_DIR, name), { mkdirp: true }, (err) => {
      if (err) {
        console.log({ err });
      }
    });
  });
};

module.exports = {
  moveDirectories,
};
