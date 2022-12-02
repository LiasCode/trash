#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const { createTrashDir } = require("./libs/createTrashDir");
const { moveDirectories } = require("./libs/moveDirs");
const { resolveDirPaths } = require("./libs/resolveDirPaths");

const PAPELERA_DIR = createTrashDir();

// OPTIONS
// Help
if (process.argv.length < 3 || process.argv.includes("--help")) {
  console.log(" YOU CAN USE : ");
  console.log(" --clean");
  console.log(" --list");
  console.log(" trash [...any nth of arguments of files and dirs names]");
  process.exit(0);
}
// Clean Trash folder
else if (process.argv.includes("--clean")) {
  console.log('CLEANING "!!! TRASH !!!"');
  console.log({ PAPELERA_DIR });
  const files = fs.readdirSync(PAPELERA_DIR);

  files.forEach((file) => {
    const filePath = path.join(PAPELERA_DIR, file);
    fs.rmSync(filePath, { recursive: true, force: true });
  });
  console.log({ files });
  process.exit(0);
}
// List Files
else if (process.argv.includes("--list")) {
  const files = fs.readdirSync(PAPELERA_DIR);
  console.log({ PAPELERA_DIR });
  console.log({ files });
  process.exit(0);
}
// Move Files and Dirs
else {
  const args = resolveDirPaths();
  moveDirectories(args, PAPELERA_DIR);
}

