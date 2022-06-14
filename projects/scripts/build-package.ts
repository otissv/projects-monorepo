import util from 'util';
import childProcess from 'child_process';

const pkg = require(`${process.cwd()}/package.json`);

const exec = util.promisify(childProcess.exec);

const removeTestFile = () => exec(`rimraf  build/*.test.*`);
const createPackageJSON = () => {
  const npmPkg = JSON.stringify({
    name: pkg.name,
    version: pkg.version,
    license: pkg.license,
    main: './build/index.js',
    typings: './build/index.d.ts',
    author: pkg.author,
    module: pkg.module,
    publishConfig: {
      access: 'public',
    },
    ...(pkg.peerDependencies ? { peerDependencies: pkg.peerDependencies } : {}),
    ...(pkg.peerDependencies ? { dependencies: pkg.dependencies } : {}),
  });

  return exec(`echo '${npmPkg}' > build/package.json`);
};
const logDone = () => console.log(`Finished building`);
const logErrors = ({ stderr, stdout }: { stderr: string; stdout: string }) => {
  if (stderr) {
    console.log(stderr);
  } else {
    console.log(stdout);
  }
};

console.log(`Building ${pkg.name} package...`);

exec('tsc --project tsconfig.json && touch build/package.json')
  .then(removeTestFile)
  .then(createPackageJSON)
  .then(logDone)
  .catch(logErrors);
