const fs = require('fs');
const path = require('path');

module.exports = {
  onPreBuild: () => {
    const env = process.env.ENV;
    const app = process.env.APP_NAME;

    const root = path.resolve(__dirname);

    fs.writeFile(
      `${root}/${app}/environment.${env}.json`,
      JSON.stringify(process.env),
      (err) => {
        if (err) throw err;
        console.log(`File environment.${env}.json is created successfully.`);
      }
    );
  },
};
