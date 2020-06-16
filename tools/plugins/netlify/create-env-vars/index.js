const fs = require('fs');
const path = require('path');

module.exports = {
  onPreBuild: () => {
    const env = process.env.ENV;
    const app = process.env.APP_NAME;

    const root = path.resolve(__dirname);

    const envPath = `${root}/${app}/environment.${env}.json`;
    const content = JSON.stringify(process.env);

    console.log('Content: ', content);

    fs.writeFile(envPath, content, (err) => {
      if (err) throw err;

      console.log(`File environment.${env}.json is created successfully.`);
    });
  },
};
