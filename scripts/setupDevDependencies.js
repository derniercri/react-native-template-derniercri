const execSync = require('child_process').execSync;
const fs = require('fs');
const path = require('path');

/**
 * Use Yarn if available, it's much faster than the npm client.
 * Return the version of yarn installed on the system, null if yarn is not available.
 */
function getYarnVersionIfAvailable() {
  let yarnVersion;
  try {
    // execSync returns a Buffer -> convert to string
    yarnVersion = (
      execSync('yarn --version', {
        stdio: [0, 'pipe', 'ignore'],
      }).toString() || ''
    ).trim();
  } catch (error) {
    return null;
  }
  return yarnVersion;
}

function createScripts() {
  const packageJSONPath = path.resolve('./package.json');
  const packageJSON = JSON.parse(fs.readFileSync(packageJSONPath));
  if (!packageJSON.scripts) {
    packageJSON.scripts = {};
  }

  packageJSON.scripts.lint = 'eslint . --ext .js,.ts,.tsx';
  packageJSON.scripts.postinstall =
    'jetify && react-native link && (cd ios && pod install)';
  packageJSON.scripts['start:android'] = 'react-native run-android';
  packageJSON.scripts['start:ios'] = 'react-native run-ios';
  packageJSON.scripts['type-check'] = 'tsc --noEmit -p . --pretty';
  packageJSON.scripts.prestorybook = 'rnstl';
  packageJSON.scripts.storybook =
    '(adb reverse tcp:7007 tcp:7007 || true) && start-storybook -p 7007';

  fs.writeFileSync(packageJSONPath, JSON.stringify(packageJSON, null, 2), 'utf8');
}

function installDevDependencies() {
  console.log('Adding dev dependencies for the project...');

  const devDependenciesJsonPath = path.resolve('./devDependencies.json');
  const devDependencies = JSON.parse(fs.readFileSync(devDependenciesJsonPath));

  for (const depName in devDependencies) {
    const depVersion = devDependencies[depName];
    const depToInstall = `${depName}@${depVersion}`;
    console.log(`Adding ${depToInstall}...`);

    if (getYarnVersionIfAvailable()) {
      execSync(`yarn add ${depToInstall} -D`, { stdio: 'inherit' });
    } else {
      execSync(`npm install ${depToInstall} --save`);
    }
  }
}

installDevDependencies();
createScripts();
