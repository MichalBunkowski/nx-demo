const fs = require('fs');
const path = require('path');
const exec = require('child_process');

module.exports = {
  onPreBuild: () => {
    const env = process.env.ENV;
    const app = process.env.APP_NAME;

    fs.writeFileSync(
      `./apps/${app}/environment.${env}.json`,
      `{
                "ENV" : "${process.env.ENV}",
                "DOMAIN": "${process.env.DOMAIN}"
            }`
    );

    exec.execSync(`ls ./apps/${app}/`);
  },
};
