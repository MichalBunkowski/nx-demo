const fs = require('fs');
const path = require('path');
const exec = require('child_process');

module.exports = {
  onPreBuild: () => {
    exec.execSync('pwd');
    console.log('__dirname', __dirname);
    console.log('resolved __dirname', path.resolve(__dirname));
  },
};
