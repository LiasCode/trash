const path = require("path");
const fs = require("fs");

const resolveDirPaths = () => {
  let argsPaths = process.argv.slice(2);

  const resolvedPaths = argsPaths.map((el) =>
    path.resolve(path.join(process.cwd(), el))
  );

  resolvedPaths.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      console.log("Operation cancelled");
      console.log("NO existe el directorio -> " + dir);
      process.exit(1);
    }
  });

  return resolvedPaths;
};

module.exports = {
  resolveDirPaths,
};
